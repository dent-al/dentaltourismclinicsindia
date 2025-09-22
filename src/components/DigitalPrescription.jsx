import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FaDownload, FaWhatsapp, FaEnvelope, FaQrcode, FaPrint, FaCheck, FaPlus, FaMinus, FaStethoscope } from 'react-icons/fa';

const DigitalPrescription = ({ dentist, patient, consultationId, consultationNotes, onPrescriptionGenerated }) => {
  const [prescriptionData, setPrescriptionData] = useState({
    diagnosis: ['Missing lower left molar (tooth #36)', 'Bone resorption present'],
    treatmentDone: ['Consultation completed', 'Digital examination performed'],
    medications: [
      { name: 'Amoxicillin 500mg', frequency: '3x daily', duration: '5 days' },
      { name: 'Ibuprofen 400mg', frequency: 'as needed', duration: 'for pain' },
      { name: 'Chlorhexidine mouthwash', frequency: 'twice daily', duration: '7 days' }
    ],
    postOpInstructions: [
      'Avoid hot food for 24 hrs',
      'Do not brush surgical area for 3 days',
      'Ice pack 10 mins on/10 mins off for first 24 hrs',
      'Take medications as prescribed',
      'Maintain oral hygiene'
    ],
    nextAppointment: '',
    additionalNotes: ''
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [prescriptionGenerated, setPrescriptionGenerated] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState(false);
  const prescriptionRef = useRef(null);

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const generateQRCode = () => {
    const qrData = `${window.location.origin}/verify-prescription/${consultationId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(qrData)}`;
  };

  const generatePrescriptionPDF = async () => {
    setIsGenerating(true);
    try {
      const element = prescriptionRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = `Digital_Prescription_${patient.patientName.replace(/\s+/g, '_')}_${consultationId}.pdf`;
      pdf.save(fileName);
      
      setPrescriptionGenerated(true);
      if (onPrescriptionGenerated) {
        onPrescriptionGenerated({ ...prescriptionData, fileName });
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Prescription Preview */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Prescription</h3>
        
        <div ref={prescriptionRef} className="bg-white p-8 border border-gray-300" style={{ minHeight: '297mm', width: '210mm', margin: '0 auto' }}>
          {/* Header */}
          <div className="text-center border-b-2 border-[#2C73D2] pb-4 mb-6">
            <div className="text-2xl font-bold text-[#2C73D2] mb-2">
              DENTAL TOURISM CLINICS INDIA | DIGITAL PRESCRIPTION
            </div>
            <div className="text-sm text-gray-600">
              <p>Clinic: {dentist?.clinic || 'Dental Clinic'} | Reg. No: {dentist?.clinicRegistration || 'REG123'}</p>
              <p>Doctor: {dentist?.name || 'Dr. Name'}, {dentist?.qualification || 'BDS'}, Reg. No: {dentist?.registration || 'DCI123'}</p>
              <p>Patient: {patient?.patientName || 'Patient Name'} | Age: {patient?.age || 'N/A'} | Country: {patient?.nationality || 'India'} 
                {patient?.passportNumber && ` | Passport: ${patient.passportNumber}`}</p>
              <p>Date: {currentDate} | Consultation ID: {consultationId || 'CONS123'}</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-sm">
            {/* Diagnosis */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Diagnosis:</h4>
              <ul className="list-disc list-inside">
                {prescriptionData.diagnosis.map((diagnosis, index) => (
                  <li key={index} className="text-gray-700">- {diagnosis}</li>
                ))}
              </ul>
            </div>

            {/* Treatment */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Treatment:</h4>
              <ul className="list-disc list-inside">
                {prescriptionData.treatmentDone.map((treatment, index) => (
                  <li key={index} className="text-gray-700">- {treatment}</li>
                ))}
              </ul>
            </div>

            {/* Medications */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Medications:</h4>
              <ul className="list-disc list-inside">
                {prescriptionData.medications.map((medication, index) => (
                  <li key={index} className="text-gray-700">
                    - {medication.name} – {medication.frequency} {medication.duration && `for ${medication.duration}`}
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-operative Instructions */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Post-operative Instructions:</h4>
              <ul className="list-disc list-inside">
                {prescriptionData.postOpInstructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700">- {instruction}</li>
                ))}
              </ul>
            </div>

            {/* Signature and QR Code */}
            <div className="flex justify-between items-end mt-8">
              <div>
                <p className="font-bold text-gray-900">Signed:</p>
                <p className="text-gray-700">[Digital Signature] {dentist?.name || 'Dr. Name'}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Generated on: {new Date().toLocaleString()}
                </p>
              </div>
              <div className="text-center">
                <img 
                  src={generateQRCode()} 
                  alt="QR Code for verification" 
                  className="w-20 h-20 mx-auto"
                />
                <p className="text-xs text-gray-500 mt-1">[QR Code for verification]</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="border-t-2 border-gray-300 pt-4 mt-8">
              <h4 className="font-bold text-red-600 mb-2">⚠️ Disclaimer:</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                This prescription has been issued following an online video consultation and is based solely on the information, images, and symptoms provided by the patient. The prescribing dentist has not physically examined the patient. This document is intended only for temporary guidance and non-emergency use. It is not valid for medico-legal purposes, insurance claims, or hospital admissions. Patients are advised to consult a local dentist for further diagnosis, investigation, or treatment before starting any medications. The issuing clinic and platform (Dental Tourism Clinics India) do not assume liability for adverse outcomes due to incomplete disclosure or misuse of this prescription.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <button
            onClick={generatePrescriptionPDF}
            disabled={isGenerating}
            className="bg-[#2C73D2] text-white px-6 py-2 rounded-md flex items-center hover:bg-[#1e5ba8] transition-colors"
          >
            {isGenerating ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            ) : (
              <FaDownload className="mr-2" />
            )}
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>

          <button
            onClick={() => window.print()}
            className="bg-[#F4A300] text-white px-6 py-2 rounded-md flex items-center hover:bg-[#e6930a] transition-colors"
          >
            <FaPrint className="mr-2" />
            Print Prescription
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalPrescription;