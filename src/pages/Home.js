import React, { useState, useEffect } from "react";
import FullPageLoader from '../components/FullPageLoader';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import logo from '../logo.svg';
import allStatesAndUTs from '../data/allStatesAndUTs';
import Testimonials from '../components/Testimonials';
import useFindDentalClinics from '../hooks/useFindDentalClinics';
import Header from "../components/Header";
import SEOHead from '../components/SEO/SEOHead';
import { useSEO } from '../contexts/SEOContext.jsx';
// import Footer from "../components/Footer"; // Import the universal Footer component
import heroSectionImg from '../assets/hero section.jpg';

// Updated features array with new titles, descriptions, and links
const features = [
  {
    image: require("../assets/consult.png"),
    title: "Instant Video Consultation",
    desc: "Consult dentist online from anywhere.",
    link: "/consult"
  },
  {
    image: require("../assets/clinic.png"), 
    title: "Trusted Dental Clinic Near You",
    desc: "Book appointments with leading dental clinics.",
    link: "/clinics"
  },
  {
    image: require("../assets/scan.png"),
    title: "3D Dental Scan Near You",
    desc: "Locate CBCT & OPG dental scan centers. ",
    link: "/cbct-opg-lab"
  },
  {
    image: require("../assets/bloodtest.png"),
    title: (
    <>
    Blood Test
    <br />
   Near You
    </>
  ),
    desc: "Book a blood test at a lab close to you.",
    link: "/blood-test-lab"
  },
];

// Slider data for problems (62 real problems)
const sliderProblems = [
  { name: "Adding Bone to the Socket" },
  { name: "Bad Breath" },
  { name: "Burning Mouth" },
  { name: "Biting Down Hard" },
  { name: "Complete Denture" },
  { name: "Children’s Dentistry" },
  { name: "Dental Implants" },
  { name: "Dental Braces" },
  { name: "Dry Mouth" },
  { name: "Dental Jewellery" },
  { name: "Fractured Tooth" },
  { name: "Facial Twitch" },
  { name: "Mouth Breathing in Kids" },
  { name: "Front Tooth Gap" },
  { name: "Gum Treatment" },
  { name: "Diabetic Mouth Changes" },
  { name: "Lump on the Facial Nerve" },
  { name: "Loud Sleeping" },
  { name: "Mouth Guard for Sports" },
  { name: "Missing Front Tooth" },
  { name: "Mouth Ulcer" },
  { name: "Mouth Red Patch" },
  { name: "Mouth Infection" },
  { name: "Mouth Cancer" },
  { name: "Mouth Care After Cancer" },
  { name: "One Sided Facial Weakness" },
  { name: "Partial Tooth Cap" },
  { name: "Producing Too Much Saliva" },
  { name: "Pain in the Jaw Joint" },
  { name: "Ringing Sound in Ears" },
  { name: "Root Canal TreatmentRinging Sound in Ears" },
  { name: "Re-Root Canal Treatment" },
  { name: "Removable Teeth" },
  { name: "Split Lip" },
  { name: "Smoking Habit" },
  { name: "Stone in the Saliva Gland" },
  { name: "Smile Makeover" },
  { name: "Severe Gum Infection" },
  { name: "Tight Tongue Skin" },
  { name: "Teeth Present at Birth" },
  { name: "Tongue Pushing" },
  { name: "Trapped Back Tooth" },
  { name: "Tooth Crown" },
  { name: "Tooth Wear" },
  { name: "Tooth Rescue Treatment" },
  { name: "Tooth Removal" },
  { name: "Teeth Whitening" },
  { name: "Thin Shells for Teeth" },
  { name: "Teeth Cleaning & Polishing" },
  { name: "Tooth Replacement" },
  { name: "Tooth is Stuck" },
  { name: "Thumb Sucking" },
  { name: "Teeth Protector for Night" },
  { name: "Tooth Cavities" },
  { name: "White Spots on Teeth" },
  { name: "Invisible Braces" },
  { name: "Dry Peeling Lips" },
  { name: "Wearing Down of Teeth" },
  { name: "Gum Pocket" },
  { name: "Sensitive Teeth" },
  { name: "Tooth Filling" },
  { name: "Crooked Tooth" },
  // New problems added below
  { name: "Bleeding Gums" },
  { name: "Swollen Gums" },
  { name: "Loose Teeth" },
  { name: "Discoloured Teeth" },
  { name: "Swelling Inside Mouth" },
  { name: "Eruption Issues in Kids" },
  { name: "Mouth Breathing in Kids" },
  { name: "Grinding Teeth at Night" },
  { name: "Audible Breathing" },
  { name: "Uncomfortable Denture" },
  { name: "Facial Asymmetry" },
  { name: "Oral Cancer Screening" },
  { name: "Delayed Eruption of Teeth" },
  { name: "Hole in the Roof of the Mouth" },
  { name: "Nutrition Deficiency Symptoms" },
  { name: "Difficulty in Chewing & Kids Speaking" },
  { name: "Facial Muscle Twitching on One Side" },
  { name: "Braces Adjustment" },
  { name: "Toothache" },
  { name: "Dental Implant Pain" },
  { name: "Wisdom Tooth Swelling" },
].map((problem) => {
  let image;
  let points = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  switch (problem.name) {
    case "Adding Bone to the Socket":
      points = [
        "Tooth loss.",
        "Loose tooth.",
        "Failed previous implants.",
        "Shrinking gums."
      ];
      break;
    case "Bad Breath":
      points = [
        "Unpleasant smell from mouth.",
        "Dry mouth.",
        "Sour taste.",
        "White or coated tongue."
      ];
      break;
    case "Burning Mouth":
      points = [
        "Dry mouth.",
        "Burning feeling after food.",
        "Numbness in mouth.",
        "Altered taste."
      ];
      break;
    case "Biting Down Hard":
      points = [
        "Jaw pain or tightness.",
        "Headaches.",
        "Tooth sensitivity.",
        "Ear pain."
      ];
      break;
    case "Complete Denture":
      points = [
        "Total tooth loss.",
        "No tooth in mouth.",
        "Inability to support teeth.",
        "Less bone support.",
      ];
      break;
    case "Children’s Dentistry":
      points = [
        "Tooth cavities.",
        "Thumb sucking.",
        "Monitoring tooth eruption.",
        "Nursing bottle caries."
      ];
      break;
    case "Dental Implants":
      points = [
        "Missing damaged teeth.",
        "Poorly fitting dentures.",
        "Desire for permanent teeth.",
        "Loss of tooth."
      ];
      break;
    case "Dental Braces":
      points = [
        "Crooked teeth.",
        "Overbite or crossbite.",
        "Crowded teeth.",
        "Gaps or spacing."
      ];
      break;
    case "Dry Mouth":
      points = [
        "Cracked lips.",
        "Increased thirst.",
        "Loss of taste sensation.",
        "Dry, rough tongue."
      ];
      break;
    case "Dental Jewellery":
      points = [
        "Cosmetic improvement.",
        "Tooth surface preservation.",
        "Decorative accessory.",
        "Minimal tooth alteration."
      ];
      break;
    case "Fractured Tooth":
      points = [
        "Visible crack or fracture.",
        "Pain or sensitivity in any tooth.",
        "Tooth mobility.",
        "Pain in tooth while chewing."
      ];
      break;
    case "Facial Twitch":
      points = [
        "Gradual facial weakness.",
        "Hearing loss.",
        "Ringing in ear.",
        "Facial numbness or tingling."
      ];
      break;
    case "Facial Muscle Twitching on One Side":
      points = [
        "Sudden, sharp pain.",
        "Electric shock like pain",
        "Pain triggered by touching.",
        "Affects cheeks, jaw & lips."
      ];
      break;
    case "Front Tooth Gap":
      points = [
        "Asymmetry in smile.",
        "Cosmetic concerns.",
        "Teeth too small or large.",
        "Space between front teeth."
      ];
      break;
    case "Gum Treatment":
      points = [
        "Bad deposits in mouth.",
        "Gum enlargement.",
        "Tooth root exposure.",
        "Many teeth mobile."
      ];
      break;
    case "Hole in the Roof of the Mouth":
      points = [
        "Opening in the roof of mouth.",
        "Passage b/n oral & nasal.",
        "Nasal regurgitation of milk.",
        "Difficulty in swallowing."
      ];
      break;
    case "Lump on the Facial Nerve":
      points = [
        "Involuntary twitching.",
        "Starts near eye. ",
        " Spread to cheek & mouth.",
        "Get worse with stress."
      ];
      break;
    case "Loud Sleeping":
      points = [
        "Breathing noise during sleep.",
        "Snoring after alcohol.",
        "Interrupted sleep.",
        " Snoring noted by bed partner."
      ];
      break;
    case "Mouth Guard for Sports":
      points = [
        "Protect your teeth.",
        "Shields your lips and gums.",
        "Prevents jaw injuries.",
        "Reduce mouth injuries."
      ];
      break;
    case "Missing Front Tooth":
      points = [
        "Aesthetic concern.",
        "Speech problems.",
        "Tooth shifting.",
        "Bite imbalance.",
      ];
      break;
    case "Mouth Ulcer":
      points = [
        "Painful ulcers.",
        "Burning or tingling sensation.",
        "Frequent ulcers.",
        "Non healing ulcers."
      ];
      break;
    case "Mouth Red Patch":
      points = [
        "Infection.",
        "Trauma or irritation.",
        "Allergic reactions.",
        "Red patches."
      ];
      break;
    case "Mouth Infection":
      points = [
        "Swelling or redness.",
        "Pain or soreness.",
        "Unpleasant taste.",
        "Fever or general discomfort."
      ];
      break;
    case "Mouth Cancer":
      points = [
        "Non healing ulcers.",
        "Red or white patches.",
        "Lumps.",
        "Difficulty in chewing."
      ];
      break;
    case "Mouth Care After Cancer":
      points = [
        "Dry mouth.",
        "Mouth sores.",
        "Increased risk of infections.",
        "Changes in taste."
      ];
      break;
    case "One Sided Facial Weakness":
      points = [
        "Loss of taste.",
        "One side of face looks uneven.",
        "Difficulty in closing of eye.",
        "Drooling from one side of face."
      ];
      break;
    case "Partial Tooth Cap":
      points = [
        "Moderate to severe decay.",
        "Wish to save the natural tooth.",
        "High chewing pressure areas.",
        "Caries tooth."
      ];
      break;
    case "Producing Too Much Saliva":
      points = [
        "Neurological disorders.",
        "Oral infections or irritations.",
        "Side effects of medications.",
        "Gastroesophageal conditions."
      ];
      break;
    case "Pain in the Jaw Joint":
      points = [
        "Jaw pain.",
        "Clicking or popping sounds.",
        "Deviated jaw.",
        "Limited jaw movement."
      ];
      break;
    case "Ringing Sound in Ears":
      points = [
        "Ringing.",
        "Roaring or buzzing.",
        "Whistling or clicking noises.",
        "Sounds in the ear."
      ];
      break;
    case "Root Canal Treatment":
      points = [
        "Tooth decay.",
        "Fractured tooth.",
        "Cavity near to the pulp.",
        "Pain in tooth."
      ];
      break;
    case "Re-Root Canal Treatment":
      points = [
        "Persistent toothache.",
        "Prolonged sensitivity.",
        "Swelling.",
        "Failed root canal treatment."
      ];
      break;
    case "Removable Teeth":
      points = [
        "Partial missing tooth.",
        "Financial constraints.",
        "Restoring missing teeth.",
        "Unable to chew."
      ];
      break;
    case "Split Lip":
      points = [
        "Gap in the upper lip.",
        "Asymmetrical nose.",
        "Wide nasal base.",
        "Difficulty in eating."
      ];
      break;
    case "Smoking Habit":
      points = [
        "Tooth discoloration.",
        "Gingivitis & periodontitis.",
        "Delayed wound healing.",
        "Quit the smoking habit."
      ];
      break;
    case "Stone in the Saliva Gland":
      points = [
        "Painless swelling or lump.",
        "Numbness or facial weakness.",
        "Dry mouth.",
        "Difficulty swallowing."
      ];
      break;
    case "Smile Makeover":
      points = [
        "Discoloured or stained teeth.",
        "Chipped & cracked teeth.",
        "Gapped & crooked teeth.",
        "Improved smile aesthetics."
      ];
      break;
    case "Severe Gum Infection":
      points = [
        "Bleeding gums.",
        "Swollen & red gums.",
        "Gums going down.",
        "Loose teeth."
      ];
      break;
    case "Tight Tongue Skin":
      points = [
        "Difficulty latching.",
        "Clicking sounds while feeding.",
        "Increased feeding time.",
        "Maternal nipple pain."
      ];
      break;
    case "Teeth Present at Birth":
      points = [
        "Happens naturally sometimes.",
        "Runs in the family.",
        "Mild health conditions.",
        "Not boils."
      ];
      break;
    case "Tongue Pushing":
      points = [
        "Lisping.",
        "Mouth breathing.",
        "Upper teeth moving forward.",
        "Tongue thrusting."
      ];
      break;
    case "Trapped Back Tooth":
      points = [
        "Pain & discomfort.",
        "Swelling or infection.",
        "Tooth fixed in bone.",
        "Side tooth damage."
      ];
      break;
    case "Tooth Crown":
      points = [
        "Severely damaged teeth.",
        "Root canal treated teeth.",
        "Discoloured teeth.",
        "Fractured tooth."
      ];
      break;
    case "Tooth Wear":
      points = [
        "Notches near gum line.",
        "Tooth sensitivity.",
        "Worn or flattened tooth.",
        "Teeth sensitive to hot or cold."
      ];
      break;
    case "Tooth Rescue Treatment":
      points = [
        "Tooth displacement.",
        "Severe tooth fractures.",
        "Gum or bone damage.",
        "Root or pulp injury."
      ];
      break;
    case "Tooth Removal":
      points = [
        "Severe tooth decay.",
        "Tooth stuck in bone.",
        "Crowded teeth.",
        "Loose tooth."
      ];
      break;
    case "Teeth Whitening":
      points = [
        "Stained or discoloured teeth.",
        "Yellowing of teeth.",
        "Stained tooth.",
        "Desire for a brighter smile."
      ];
      break;
    case "Thin Shells for Teeth":
      points = [
        "Discoloured teeth.",
        "Front gap closure.",
        "Misshaped front side tooth.",
        "Improvement of smile."
      ];
      break;
    case "Teeth Cleaning & Polishing":
      points = [
        "Plaque & tartar build up.",
        "Gum inflammation or bleeding.",
        "Bad breath.",
        "Stained teeth."
      ];
      break;
    case "Tooth Replacement":
      points = [
        "Missing tooth or teeth.",
        "Difficulty chewing or speaking.",
        "Shifting of teeth.",
        "Look concerns."
      ];
      break;
    case "Tooth is Stuck":
      points = [
        "Missing tooth or teeth.",
        "Difficulty chewing or speaking.",
        "Shifting of teeth.",
        "Look concerns."
      ];
    case "Thumb Sucking":
      points = [
       
        "Jaw growth.",
        "Want to stop the habit.",
        "Speech issues.",
        "Altered swallowing pattern."
      ];
      break;
    case "Teeth Protector for Night":
      points = [
        "Clenching of teeth.",
        "Jaw joint problems.",
        "Clenching due to stress.",
        "Teeth grinding."
      ];
      break;
    case "Tooth Cavities":
      points = [
        "Visible holes in teeth.",
        "Toothache.",
        "Cracked or broken teeth.",
        "Pain when biting or chewing."
      ];
      break;
    case "White Spots on Teeth":
      points = [
        "White spots or streaks.",
        "Brown stains.",
        "Mottled enamel.",
        "Pitted or rough enamel."
      ];
    case "Invisible Braces":
      points = [
        "Malocclusion.",
        "Spacing between teeth.",
        "Wish for celebrity smile.",
        "Don’t wish to go for braces."
      ];
      break;
    case "Dry Peeling Lips":
      points = [
        "Redness or inflammation.",
        "Peeling or crust formation.",
        "Swelling on lips.",
        "Dryness or flaking of lip."
      ];
      break;
    case "Wearing Down of Teeth":
      points = [
        "Flattened or worn down biting.",
        "Increased tooth sensitivity.",
        "Changes in tooth alignment.",
        "Wear on biting surfaces."
      ];
      break;
    case "Gum Pocket":
      points = [
        "Swollen, painful or red gums.",
        "Bad breath.",
        "Bleeding gums.",
        "Loose or shifting of teeth."
      ];
      break;
    case "Sensitive Teeth":
      points = [
        "Sensitivity when brushing.",
        "Tingling or shooting pain.",
        "Sharp pain when eating.",
        "Sensitivity to hot or cold."
      ];
      break;
    case "Tooth Filling":
      points = [
        "Tooth caries.",
        "To replace damaged fillings.",
        "To close small gaps.",
        "Worn down teeth."
      ];
      break;
    case "Crooked Tooth":
      points = [
        "Malaligned teeth.",
        "Speech problems.",
        "Difficulty in biting.",
        "Frequent biting on cheeks."
      ];
      break;
    case "Bleeding Gums":
      points = [
        "Swollen, painful or red gums.",
        "Bad breath.",
        "Bleeding gums.",
        "Loose or shifting of teeth."
      ];
      break;
    case "Swollen Gums":
      points = [
        "Swollen, painful or red gums.",
        "Bad breath.",
        "Bleeding gums.",
        "Loose or shifting of teeth."
      ];
      break;
    case "Loose Teeth":
      points = [
        "Teeth that are moving.",
        "Gum disease.",
        "Injury or trauma.",
        "Bone loss."
      ];
      break;
    case "Discoloured Teeth":
      points = [
        "Yellow or brown stains.",
        "Uneven coloration.",
        "Staining from food or drink.",
        "Poor oral hygiene."
      ];
      break;
    case "Swelling Inside Mouth":
      points = [
        "Redness or inflammation.",
        "Swelling of cheeks/gums.",
        "Pain or discomfort.",
        "Difficulty swallowing."
      ];
      break;
    case "Eruption Issues in Kids":
      points = [
        "Delayed eruption of teeth.",
        "Crowded teeth.",
        "Pain or discomfort.",
        "Difficulty in chewing."
      ];
      break;
    case "Mouth Breathing":
      points = [
        "Mouth breathing during sleep.",
        "Dry mouth upon waking.",
        "Bad breath.",
        "Difficulty in swallowing."
      ];
      break;
    case "Grinding Teeth at Night":
      points = [
        "Teeth grinding during sleep.",
        "Jaw pain or soreness.",
        "Headaches.",
        "Worn down teeth."
      ];
      break;
    case "Audible Breathing":
      points = [
        "Noisy breathing during sleep.",
        "Mouth breathing.",
        "Snoring.",
        "Difficulty in breathing."
      ];
      break;
    case "Uncomfortable Denture":
      points = [
        "Discomfort in the gums.",
        "Difficulty chewing.",
        "Movement of the denture.",
        "Irritation or soreness."
      ];
      break;
    case "Facial Aesthetics":
      points = [
        "Loss of facial volume.",
        "Wrinkles and fine lines.",
        "Gummy smile.",
        "Asymmetry."
      ];
      break;
    case "Oral Cancer Screening":
      points = [
        "Visual examination of mouth.",
        "Screening abnormalities.",
        "Assessment of risk factors.",
        "Referral for biopsy if needed."
      ];
      break;
    case "Nutrition Deficiency Symptoms":
      points = [
        "Unexplained fatigue.",
        "Frequent infections.",
        "Slow wound healing.",
        "Hair loss."
      ];
      break;
    case "Diabetic Mouth Changes":
      points = [
        "Dry mouth.",
        "Gum disease.",
        "Slow healing of oral wounds.",
        "Changes in taste."
      ];
      break;
    case "Delayed Eruption of Teeth":
      points = [
        "Delayed eruption of teeth.",
        "Not erupted permanent tooth.",
        "Crowding of teeth.",
        "Impacted teeth."
      ];
      break;
    case "Difficulty in Chewing & Kids Speaking":
      points = [
        "Difficulty in chewing food.",
        "Pain while chewing.",
        "Speech difficulties.",
        "Misaligned teeth."
      ];
      break;
    case "Mouth Breathing in Kids":
      points = [
        "Mouth breathing during sleep.",
        "Dry mouth upon waking.",
        "Bad breath.",
        "Difficulty in swallowing."
      ];
      break;
    case "Facial Asymmetry":
      points = [
        "Loss of facial volume.",
        "Wrinkles and fine lines.",
        "Gummy smile.",
        "Asymmetry."
      ];
      break;
    case "Braces Adjustment":
      points = [
        "Discomfort or pressure pain.",
        "Tooth movement has stalled.",
        "Loose or broken brackets.",
        "Bite feels misaligned."
      ];
      break;
    case "Toothache":
      points = [
        "Sharp or throbbing pain.",
        "Sensitivity to hot or cold.",
        "Pain when chewing.",
        "Swelling around the tooth."
      ];
      break;
      case "Dental Implant Pain":
        points = [
          "Discomfort at the implant site.",
          "Pain during chewing.",
          "Swelling or inflammation.",
          "Loose implant."
        ];
        break;
    case "Wisdom Tooth Swelling":
      points = [
        "Swelling around wisdom tooth.",
        "Pain or discomfort in the jaw.",
        "Difficulty opening the mouth.",
        "Pain behind ear."
      ];
      break;
    default:
      points = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  }
  // Safe require for image
  try {
    image = require(`../assets/${problem.name.replace(/[^a-zA-Z0-9]/g, ' ').replace(/ +/g, ' ').trim().replace(/ /g, '%20')}.png`);
  } catch (e) {
    try {
      image = require(`../assets/${problem.name}.png`);
    } catch (e2) {
      image = require("../assets/consult.png");
    }
  }
  return {
    image,
    name: problem.name,
    points
  };
});

// Specialists data (with descriptions)
const specialists = [
  { name: "General Dentist", img: require('../assets/General Dentist.png'), desc: "Comprehensive oral care. Restorative & cosmetic procedures. Patient education & prevention.", points: [
    "Tooth cavities.",
    "White spot on teeth.",
    "Tooth wear.",
    "Dental jewellery.",
    "Performs regular dental check-ups.",
    "Clean teeth & removes plaque.",
    "Fills cavities."
  ] },
  { name: "Periodontist", img: require('../assets/Periodontist.png'), desc: "Treats gum disease. Saves teeth by improving gum & bone health. Performs dental implants & surgery.", points: [
    "Gum surgery.",
    "Teeth cleaning & polishing.",
    "Teeth whitening.",
    "Severe gum infection.",
    "Mouth care after cancer.",
    "Gum treatment.",
    "Bad breath.",
    "Gum pocket.",
    "Receding gums."
  ] },
  { name: "Prosthodontist", img: require('../assets/Prosthodontist.png'), desc: "Fix broken/missing teeth with natural-looking caps. Dental implant caps specialists. Denture specialists. Smile makeover experts.", points: [
    "Wearing down of teeth.",
    "Teeth protector for night.",
    "Dental implants.",
    "Tooth replacement.",
    "Thin shells for teeth.",
    "Tooth crown.",
    "Smile makeover.",
    "Partial tooth cap.",
    "Tooth bridge."
  ] },
  { name: "Orthodontist", img: require('../assets/Orthodontist.png'), desc: "Straightens crooked teeth. Uses braces & aligners to correct teeth. Corrects problems like overbites. Underbites & crossbites for better function.", points: [
    "Invisible braces.",
    "Dental braces.",
    "Crooked tooth.",
    "Braces adjustment.",
    "Tooth gap closure.",
    "Tooth alignment.",
    "Tooth spacing.",
    "Tooth crowding.",
    "Tooth protrusion."
  ] },
  { name: "Endodontist", img: require('../assets/Endodontist.png'), desc: "Specializes in saving teeth. Performs root canal treatments. Handles complex dental pain.", points: [
    "Root canal treatment.",
    "Tooth pain relief.",
    "Pulp therapy.",
    "Retreatment of failed root canals.",
    "Complex dental pain management.",
    "Tooth rescue treatment.",
    "Re-root canal treatment.",
  ] },
  { name: "Cosmetic Dentist", img: require('../assets/Cosmetic Dentist.png'), desc: "Enhances smile. Fixes chips, cracks, & other imperfections for a flawless look. Customizes smile makeovers.", points: [
    "Tooth crown.",
    "Smile makeover.",
    "Partial tooth cap.",
    "Missing front tooth.",
    "Front tooth gap.",
    "Dental jewellery.",
    "Tooth wear.",
    "Teeth whitening.",
    "Gummy smile."
  ] },
  { name: "Pediatric Dentist", img: require('../assets/Children’s Dentistry.png'), desc: "Cares for children’s teeth. Specializes in the dental needs of kids from babies to teens. Helps children develop healthy brushing & flossing routines.", points: [
    "Teeth present at birth.",
    "Tight tongue skin.",
    "Thumb sucking.",
    "Tooth cavities.",
    "Tooth filling.",
    "Children's dentistry.",
    "Bad breath.",
    "Tooth sensitivity.",
    "Mouth breathing in kids.",
  ] },
  { name: "Oral and Maxillofacial Surgeon", img: require('../assets/Oral Surgeon.png'), desc: "Wisdom tooth removal. Fixes jaw issues & facial injuries through advanced surgery. Places dental implants.", points: [
    "Adding bone to the socket.",
    "Dental implants.",
    "Fractured tooth.",
    "Facial twitch.",
    "Facial muscle twitching on one side.",
    "Hole in the roof of the mouth.",
  ] },
  { name: "Holistic Dentist", img: require('../assets/Holistic Dentist.png'), desc: "Natural dental care. Uses biocompatible materials & treatments that support overall health. Focuses on whole-body wellness.", points: [
    "Tooth cavities.",
    "Tooth filling.",
    "Tooth rescue treatment.",
    "Partial tooth cap.",
    "Saves tooth from root canal treatment.",
    "Treats according to whole body wellness.",
    "Avoids harmful chemicals.",
  ] },
  { name: "TMJ Wellness Expert", img: require('../assets/TMJ Wellness Expert.png'), desc: "Treats jaw pain & discomfort. Specializes in diagnosing & treating TMJ disorders. Helps alleviate headaches & muscle tension related to jaw issues.", points: [
    "Pain in the jaw joint.",
    "Ringing sound in ears.",
    "Jaw problems.​",
    "Jaw lock.",
    "Night guard.",
    "Headaches of one side.​",
    "Audible breathing.",
    "Jaw clenching.",
    "Teeth grinding.",
  ] },
  { name: "Oral Medicine Specialist", img: require('../assets/Oral Medicine Specialist.png'), desc: "Diagnoses oral health disorders. Specializes in identifying conditions that affect the mouth, jaw & related areas. Manages chronic oral conditions.", points: [
    "Diagnosis & treating mouth problems that aren't caused by teeth.",
    "Mouth sores.",
    "Dry mouth.",
    "Burning sensation.",
    "Oral lesions.",
    "Tooth sensitivity.",
    "Mouth breathing."
  ] },
  { name: "Dental Implant Specialist", img: require('../assets/Dental Implant Specialist.png'), desc: "Specializes in placing dental implants. Restores function & aesthetics. Improves both the look & function of smile with implants.", points: [
    "Adding bone to the socket.",
    "Dental implants.",
    "Replacing missing teeth.",
    "Implant dentures.",
    "Smile makeover.",
    "Bone grafting.",
    "Implant-supported bridges.",
    "Immediate implant placement."
  ] },
  { name: "Oral Radiologist", img: require('../assets/Oral Radiologist.png'), desc: "Dental imaging expert. Helps with accurate diagnosis. Guides safe treatment planning.", points: [
    "CBCT expert.",
    "X-ray ",
    "MRI.",
       "Find dental health  problems.",
    "Indentify jaw joint issues.",
    "Detects hidden dental issues.",
    "Guides treatment planning.",
  ] },
  { name: "Biomimetic Dentist", img: require('../assets/Biomimetic Dentist.png'), desc: "Mimics natural tooth function. Uses advanced materials. Techniques to restore teeth that look & function like natural ones.", points: [
    "Deep tooth cavities.",
    "Tooth rescue treatment.",
    "Sensitive teeth.",
    "Tooth fillings. ",
    "Uses natural looking materials.",
    "Preserves as much natural tooth as possible.",
      ] },
];

// Products data for the shop slider
const products = [
  { name: 'Tooth Paste', img: require('../assets/Tooth Paste.png') },
  { name: 'Tooth Brush', img: require('../assets/Tooth Brush.png') },
  { name: 'Gum Paints', img: require('../assets/Gum Paints.png') },
  { name: 'Mouth Wash', img: require('../assets/Mouth Wash.png') },
  { name: 'Flossers', img: require('../assets/Flossers.png') },
  // New products
  { name: 'Tooth Whitening', img: require('../assets/Tooth Whitening.png') },
  { name: 'Lip & Oral care', img: require('../assets/Lip & Oral care.png') },
  { name: 'Ayurvedic Dental ', img: require('../assets/Ayurvedic Dental.png') },
  { name: 'Denture & Retainer ', img: require('../assets/Denture & Retainer.png') },
  { name: 'Tongue Cleaner', img: require('../assets/Tongue Cleaner.png') },
  { name: 'Interdental Brushes', img: require('../assets/Interdental Brushes.png') },
  { name: 'Travel Kits', img: require('../assets/Travel Kits.png') },
];

// ClinicSlider component for clinic search section
// ...existing code...

const clinicCards = [
  {
    img: require('../assets/urja dental.png'),
    name: 'Urja Multispeciality Dental Clinic',
    location: 'Mohali, Punjab',
    rating: 4.8,
    bookUrl: '#book',
    website: 'https://medivistahospital.com',
    whatsapp: 'https://wa.me/918626070298',
    map: 'https://maps.google.com/?q=MediVista+Superspeciality+Dental+Clinic+Nashik',
  },
  {
    img: require('../assets/clinic.png'),
    name: 'MediVista Superspeciality Dental Clinic',
    location: 'Nashik, Maharashtra',
    rating: 4.7,
    bookUrl: '#book',
    website: 'https://urjadentalmohali.com',
    whatsapp: 'https://wa.me/919876543210',
    map: 'https://maps.google.com/?q=Urja+Multispeciality+Dental+Clinic+Mohali',
  },
  {
    img: require('../assets/clinic.png'),
    name: 'Belle 32 Dental Care',
    location: 'Mumbai, Maharashtra',
    rating: 4.7,
    bookUrl: '#book',
    website: 'https://belle32.dentist/',
    whatsapp: 'https://wa.me/919988776655',
    map: `https://maps.google.com/?q=${encodeURIComponent('Pearl Dental & Implant Clinic Delhi')}`,
  },
];

function ClinicSlider() {
  const [current, setCurrent] = useState(0);
  const clinicsPerSlide = 2;
  const totalSlides = Math.ceil(clinicCards.length / clinicsPerSlide);

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Only show the slider cards and navigation arrows/dots, nav bar removed/hidden */}
      <div className="w-full flex justify-center items-center gap-4 overflow-x-hidden">
        {/* Nav arrows OUTSIDE the cards */}
        <button
          className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition border-2 border-[#2C73D2] z-10 flex items-center justify-center"
          onClick={prevSlide}
          aria-label="Previous"
          style={{ height: '40px', width: '40px', fontSize: '1.25rem' }}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20" style={{ display: 'block', margin: 'auto' }}><path d="M12.293 16.293a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L7.414 9H17a1 1 0 1 1 0 2H7.414l4.879 4.879a1 1 0 0 1 0 1.414z" /></svg>
        </button>
        <div className="flex justify-center gap-4 w-full">
          {clinicCards.slice(current * clinicsPerSlide, current * clinicsPerSlide + clinicsPerSlide).map((card, idx) => (
            <div
              key={idx}
              className="transition-all duration-500 w-[340px] max-w-full bg-white rounded-xl shadow p-4 flex flex-col items-start border border-gray-200"
            >
              <img src={card.img} alt={card.name} className="w-32 h-32 object-cover rounded-full mb-3 mx-auto" />
              <span className="text-xl font-bold text-[#2C73D2] mb-1">{card.name}</span>
              <span className="text-[#555] text-base mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F4A300]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" /></svg>
                {card.location}
              </span>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-1 text-[#F4A300] font-semibold">
                  {card.rating}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill={i < Math.round(card.rating) ? '#F4A300' : '#e5e7eb'} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z" /></svg>
                  ))}
                </span>
                <span className="text-gray-500 text-sm">as per Google reviews</span>
              </div>
              <div className="flex flex-col gap-3 mt-4 w-full">
                <a href={card.bookUrl} className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition text-center flex items-center justify-center gap-2 mb-2" style={{ minHeight: '48px' }}>
                  <img src={require('../assets/Book Now.png')} alt="Book Now" className="w-8 h-7 inline-block" />
                  <span>Book Now</span>
                </a>
                <div className="flex flex-row gap-3 w-full">
                  <a href={card.website} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition flex items-center justify-center">
                    <img src={require('../assets/website icon.png')} alt="Website" className="w-8 h-7 inline-block" />
                  </a>
                  <a href={card.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-lg bg-[#25D366] text-white shadow hover:bg-[#128C7E] transition flex items-center justify-center">
                    <img src={require('../assets/Whatsapp icon.png')} alt="WhatsApp" className="w-8 h-7 inline-block transition-transform duration-150 active:scale-90" />
                  </a>
                  <a href={card.map} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-lg border border-[#1BC47D] text-[#1BC47D] hover:bg-[#1BC47D] hover:text-white transition flex items-center justify-center">
                    <img src={require('../assets/location.png')} alt="Location" className="w-8 h-7 inline-block" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition border-2 border-[#2C73D2] z-10 flex items-center justify-center"
          onClick={nextSlide}
          aria-label="Next"
          style={{ height: '40px', width: '40px', fontSize: '1.25rem' }}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20" style={{ display: 'block', margin: 'auto' }}><path d="M7.707 16.293a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 1 0-1.414 1.414L12.586 9H3a1 1 0 1 0 0 2h9.586l-4.879 4.879a1 1 0 0 0 0 1.414z" /></svg>
        </button>
      </div>
      {/* Navigation dots only, nav bar removed/hidden */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#2C73D2]' : 'bg-gray-300'} focus:outline-none`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
// ...existing code...

// Increase drop shadow for product boxes in the product section
// Find the product box rendering and update its className:
// Example:
// <div className="bg-white rounded-xl p-4 shadow-lg ..."> -> <div className="bg-white rounded-xl p-4 shadow-2xl drop-shadow-2xl ...">

// If you use a custom ProductBox component or render inline, update the shadow class to 'shadow-2xl drop-shadow-2xl' for maximum effect.

// Testimonials data for the slider
const testimonials = [
  {
    text: "The booking process was seamless and the clinic was top-notch. Highly recommend for anyone traveling to India!",
    name: "John Smith",
    type: "International",
    img: (() => { try { return require('../assets/John Smith.png'); } catch { return require('../logo.svg'); } })()
  },
  {
    text: "I found the best dentist in my city through this platform. The reviews were very helpful!",
    name: "Priya Sharma",
    type: "National",
    img: (() => { try { return require('../assets/Priya Sharma.png'); } catch { return require('../logo.svg'); } })()
  },
  {
    text: "Excellent service and support. I felt confident booking my appointment from abroad.",
    name: "Maria Garcia",
    type: "International",
    img: (() => { try { return require('../assets/Maria Garcia.png'); } catch { return require('../logo.svg'); } })()
  },
  {
    text: "Very easy to use and the clinic staff were very professional. Will use again!",
    name: "Amit Patel",
    type: "National",
    img: (() => { try { return require('../assets/Amit Patel.png'); } catch { return require('../logo.svg'); } })()
  },
  {
    text: "I was able to compare clinics and book an appointment in minutes. The process was smooth and transparent.",
    name: "Sophie Dubois",
    type: "International",
    img: (() => { try { return require('../assets/Sophie Dubois.png'); } catch { return require('../logo.svg'); } })()
  },
  {
    text: "Great platform for finding trusted dentists. The user interface is very friendly.",
    name: "Rahul Verma",
    type: "National",
    img: (() => { try { return require('../assets/Rahul Verma.png'); } catch { return require('../logo.svg'); } })()
  },
  {
    text: "I appreciate the detailed reviews and easy booking system. Made my dental trip to India stress-free!",
    name: "Elena Rossi",
    type: "International",
    img: (() => { try { return require('../assets/Elena Rossi.png'); } catch { return require('../logo.svg'); } })()
  },
  {
    text: "Booking a dental appointment for my parents was never this easy. Thank you!",
    name: "Neha Gupta",
    type: "National",
    img: (() => { try { return require('../assets/Neha Gupta.png'); } catch { return require('../logo.svg'); } })()
  }
];

// Banner/poster data for the top-of-page rotating ad
const banners = [
  {
    image: require("../assets/clinic.png"),
    title: "MediVista SUPERSPECIALITY DENTAL CLINIC",
    subtitle: "Nashik Maharashtra",
    website: "medivistahospital.com",
    phone: "+91 8626070298",
    rightImage: require("../assets/clinic.png"),
  },
  {
    image: require("../assets/scan.png"),
    title: "SmileCare ADVANCED DENTAL CENTER",
    subtitle: "Mumbai Maharashtra",
    website: "smilecaremumbai.com",
    phone: "+91 9876543210",
    rightImage: require("../assets/scan.png"),
  },
  {
    image: require("../assets/bloodtest.png"),
    title: "Pearl Dental & Implant Clinic",
    subtitle: "Pune Maharashtra",
    website: "pearldentalpune.com",
    phone: "+91 9988776655",
    rightImage: require("../assets/bloodtest.png"),
  },
];

// Responsive: Show 1 specialist per slide on mobile, 3 on desktop
const isMobile = window.innerWidth < 640;
const specialistsPerSlide = isMobile ? 1 : 3;
const specialistMaxIndex = Math.max(Math.ceil(specialists.length / specialistsPerSlide) - 1, 0);

const Home = () => {
  const { getPageSEO, generateStructuredData } = useSEO();
  const homeSEO = getPageSEO('homepage');
  
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [filteredStates, setFilteredStates] = useState(allStatesAndUTs);
  const [specialistIndex, setSpecialistIndex] = useState(0);
  const [problemSliderIndex, setProblemSliderIndex] = useState(0);
  const [productSliderIndex, setProductSliderIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [flippedSpecialists, setFlippedSpecialists] = useState(Array(specialists.length).fill(false));
  const clinicsRaw = useFindDentalClinics();
  const clinics = Array.isArray(clinicsRaw) ? clinicsRaw : [];
  const stateOptions = Array.from(new Set(clinics.map(c => c.state))).sort();
  const filteredClinics = clinics.filter(c =>
    (!searchQuery || c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.city.toLowerCase().includes(searchQuery.toLowerCase()) || (c.specialities && c.specialities.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (!selectedState || c.state === selectedState)
  );
  const navigate = useNavigate();

  // Fix: Define searchQuery as alias for search
  const searchQuery = search;

  // Responsive: Show 1 problem per slide on mobile, 4 on desktop
  const isMobile = window.innerWidth < 640;
  const problemsPerSlide = 3; // Set problemsPerSlide to 3
  const problemMaxIndex = Math.max(Math.ceil(sliderProblems.length / problemsPerSlide) - 1, 0);
  const productsPerSlide = isMobile ? 1 : 4;
  const productMaxIndex = Math.max(Math.ceil(products.length / productsPerSlide) - 1, 0);
  const testimonialsPerSlide = 4;
  const testimonialMaxIndex = Math.max(Math.ceil(testimonials.length / testimonialsPerSlide) - 1, 0);

  // Auto-slide for Problems
  useEffect(() => {
    const interval = setInterval(() => {
      setProblemSliderIndex(prev => prev >= problemMaxIndex ? 0 : prev + 1);
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [problemMaxIndex]);

  // Auto-slide for Specialists
  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialistIndex(prev => prev >= specialistMaxIndex ? 0 : prev + 1);
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [specialistMaxIndex]);

  // Auto-slide for Products
  useEffect(() => {
    const interval = setInterval(() => {
      setProductSliderIndex(prev => prev >= productMaxIndex ? 0 : prev + 1);
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [productMaxIndex]);

  // Auto-slide for Testimonials (pause on hover)
  useEffect(() => {
    if (testimonialPaused) return;
    const interval = setInterval(() => {
      setTestimonialIndex(prev => prev >= testimonialMaxIndex ? 0 : prev + 1);
    }, 30000); // 30 seconds
    return () => clearInterval(interval);
  }, [testimonialMaxIndex, testimonialPaused]);

  // Auto-rotate banner every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/clinics?search=${encodeURIComponent(search)}`);
    }
  };

  // Filter state dropdown options as user types in the search input
  useEffect(() => {
    if (!search.trim()) {
      setFilteredStates(allStatesAndUTs);
    } else {
      setFilteredStates(
        allStatesAndUTs.filter(state =>
          state.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  // Update sectionSpacing for even less vertical spacing
  const sectionSpacing = "py-2 md:py-3 lg:py-4"; // Even more compact spacing

  if (loading) return <FullPageLoader />;
  return (
    <>
      <SEOHead
        title={homeSEO.title}
        description={homeSEO.description}
        keywords={homeSEO.keywords}
        structuredData={generateStructuredData('homepage', {
          "@type": "WebSite",
          "name": "Dental Tourism Clinics India",
          "url": "https://dentaltourismclinicsindia.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://dentaltourismclinicsindia.com/clinics?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      />
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      {/* HERO SECTION: Image on the right, text on the left (side by side on desktop, stacked on mobile) */}
      <section className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-2 md:px-2 py-2 md:py-4 md:gap-2">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-lg order-2 md:order-1 md:pr-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2563d6] mb-4 leading-tight">
            Smile Confidently with India’s Top<br className="hidden sm:block" /> Dental Tourism Clinics
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Affordable, world-class dental care with personalized travel assistance. Trusted by thousands of international patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full">
            <Link to="/clinics" className="px-8 py-3 rounded-md bg-gradient-to-r from-[#F4A300] to-[#2C73D2] text-white font-semibold text-lg shadow hover:from-[#2C73D2] hover:to-[#F4A300] transition text-center">
              Explore Dental Clinics
            </Link>
            <Link to="/consult" className="px-8 py-3 rounded-md bg-gradient-to-r from-[#F4A300] to-[#2C73D2] text-white font-semibold text-lg shadow hover:from-[#2C73D2] hover:to-[#F4A300] transition text-center">
              Book Online Video Consultation
            </Link>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex items-center justify-center w-full md:w-auto mt-4 md:mt-0 order-1 md:order-2">
          <img src={heroSectionImg} alt="Hero section" className="max-w-[420px] md:max-w-[480px] lg:max-w-[540px] rounded-lg shadow-lg" />
        </div>
      </section>
      {/* ================= WHY INDIA IS THE GLOBAL HUB FOR DENTAL TOURISM SECTION */}
      {/* ...existing why india section code... */}
      {/* ================= Problem Slider & Specialist Display ================= */}
      <div className="w-full flex flex-col items-center">
        {/* ...existing problem slider code... */}
        {selectedProblem ? (
          <div className="w-full flex flex-col items-center mt-8">
            <h3 className="text-xl font-bold text-[#2C73D2] mb-4">Specialist(s) for: {selectedProblem}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {specialists.filter(spec =>
                spec.points.some(point =>
                  point.toLowerCase().includes(selectedProblem.toLowerCase()) || selectedProblem.toLowerCase().includes(point.toLowerCase())
                )
              ).map((spec, idx) => (
                <div key={spec.name} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 w-[260px] min-h-[320px]">
                  <img src={spec.img} alt={spec.name} className="h-20 w-20 object-contain rounded-full mb-4" />
                  <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">{spec.name}</div>
                  <div className="text-base text-gray-700 text-center mb-2">{spec.desc}</div>
                  <ul className="text-sm text-[#333333] text-left w-full mb-2 px-2" style={{ fontSize: '15px', listStyleType: 'disc', paddingLeft: '1.2em' }}>
                    {spec.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
              {specialists.filter(spec =>
                spec.points.some(point =>
                  point.toLowerCase().includes(selectedProblem.toLowerCase()) || selectedProblem.toLowerCase().includes(point.toLowerCase())
                )
              ).length === 0 && (
                <div className="text-base text-gray-500">No matching specialist found for this problem.</div>
              )}
            </div>
          </div>
        ) : null}
      </div>
      {/* ...rest of the page sections... */}
    <section className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pt-6 pb-8 px-2 sm:px-4 overflow-x-hidden mt-0 mb-16 ${sectionSpacing}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C73D2] mb-1 font-[Poppins]">Why India is the Global Hub for Dental Tourism?</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {/* Affordable Treatments */}
        <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
          <img src={(() => { try { return require('../assets/Affordable Treatment.png'); } catch { return require('../logo.svg'); } })()} alt="Affordable Treatment" className="w-[160px] h-[160px] object-contain mb-0" />
          <div className="text-lg font-bold text-[#2C73D2] mb-0.5 text-center">Affordable Treatments</div>
          <div className="text-base text-gray-700 text-center">Save up to 70% on world-class dental treatments.</div>
        </div>
        {/* Expert Dentists */}
        <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
          <img src={(() => { try { return require('../assets/Expert Dentist.png'); } catch { return require('../logo.svg'); } })()} alt="Expert Dentist" className="w-[160px] h-[160px] object-contain mb-0" />
          <div className="text-lg font-bold text-[#2C73D2] mb-0.5 text-center">Expert Dentists You can Trust</div>
          <div className="text-base text-gray-700 text-center">Precision, passion and a perfect smile — lead by experts.</div>
        </div>
        {/* Tourism + Treatment */}
        <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
          <img src={(() => { try { return require('../assets/Tourism + Treatment.png'); } catch { return require('../logo.svg'); } })()} alt="Tourism + Treatment" className="w-[160px] h-[160px] object-contain mb-0" />
          <div className="text-lg font-bold text-[#2C73D2] mb-0.5 text-center">Tourism + Dental Treatment</div>
          <div className="text-base text-gray-700 text-center">Recover your smile & joy while exploring India’s beauty.</div>
        </div>
        {/* Assisted Travel Plans */}
        <div className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 min-h-[340px] justify-start">
          <img src={(() => { try { return require('../assets/Assisted Travel Plans.png'); } catch { return require('../logo.svg'); } })()} alt="Assisted Travel Plans" className="w-[160px] h-[160px] object-contain mb-0" />
          <div className="text-lg font-bold text-[#2C73D2] mb-0.5 text-center">Top Dental Clinics Across India </div>
          <div className="text-base text-gray-700 text-center">Top rated dental clinics across India for expert care & trusted smile.</div>
        </div>
      </div>
    </section>

    {/* ================= FEATURE SECTION ================= */}
    <div className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pb-12 px-2 sm:px-4 mt-16 mb-16 overflow-x-hidden ${sectionSpacing}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C73D2] mb-2">Leading Dental Clinics</h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-700">Explore trusted dental clinics, book video consultations, locate scan centers, and find nearby labs — all in one place.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full">
        {features.map((feature, idx) => (
          <Link to={feature.link} key={idx} className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition group">
            <div className="flex justify-center items-center mb-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-28 w-auto mx-auto mb-8"
              />
            </div>
            <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">{feature.title}</div>
            <div className="text-base text-[#333333] text-center mb-2">{feature.desc}</div>
            <span className="mt-auto px-4 py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow drop-shadow-md hover:from-[#F4A300] hover:to-[#2C73D2] transition">Learn More</span>
          </Link>
        ))}
      </div>
    </div>

    {/* ================= SPECIALIST SECTION (was Problem Slider) ================= */}
    <section className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pb-12 px-2 sm:px-4 overflow-x-hidden mt-16 mb-16 ${sectionSpacing}`}>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C73D2] mb-2 font-[Poppins] text-center">Consult Dentist Online</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-lg font-[Poppins] mb-8 text-center">Private online consultations with verified dentists in all specialists.</p>
        <div className="flex items-center w-full justify-center">
          <button
            onClick={() => setProblemSliderIndex((prev) => Math.max(prev - 1, 0))}
            className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition mr-4 disabled:opacity-50"
            disabled={problemSliderIndex === 0}
            aria-label="Previous"
            style={{ height: '40px', width: '40px', fontSize: '1.25rem' }}
          >
            <FaChevronLeft />
          </button>
          <div className="flex w-full justify-center gap-8"> {/* 3 cards per slide, gap between cards */}
            {sliderProblems.slice(problemSliderIndex * 3, problemSliderIndex * 3 + 3).map((problem, idx) => (
              <div key={problem.name} className="flex flex-col items-center w-full cursor-pointer" onClick={() => navigate('/dentistlist', { state: { problem: problem.name } })}>
                <div className="flex flex-col bg-[#f7f7f7] rounded-2xl shadow-lg p-0 border border-[#2C73D2]/10 w-[270px] h-[370px] mx-2 overflow-hidden justify-between mb-6">
                  <div className="w-full flex items-center justify-center overflow-hidden mb-4">
                    <img src={problem.image} alt={problem.name} className="h-32 w-32 object-contain rounded-full" />
                  </div>
                  <div className="text-lg font-bold text-[#2C73D2] text-center w-full leading-tight mt-2 mb-2 px-4">{problem.name}</div>
                  <ul className="text-base text-[#333333] text-left w-full mb-2 px-6" style={{ fontSize: '16px', listStyleType: 'disc', paddingLeft: '1.2em' }}>
                    {Array.isArray(problem.points)
                      ? problem.points.map((point, i) => <li key={i}>{point}</li>)
                      : <li>{problem.points}</li>}
                  </ul>
                  <Link
                    to="/consult"
                    className="mt-2 mb-4 mx-auto px-6 py-2 rounded-full shadow-sm drop-shadow-md bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white text-base font-bold tracking-wide hover:from-[#F4A300] hover:to-[#2C73D2] transition-all duration-200"
                    style={{ boxShadow: '0 2px 6px rgba(44,115,210,0.10)' }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" />
                      </svg>
                      Consult Now
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setProblemSliderIndex((prev) => Math.min(prev + 1, problemMaxIndex))}
            className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition ml-4 disabled:opacity-50"
            disabled={problemSliderIndex >= problemMaxIndex}
            aria-label="Next"
            style={{ height: '40px', width: '40px', fontSize: '1.25rem' }}
          >
            <FaChevronRight />
          </button>
        </div>
        {/* Pagination Dots: Always show, and center below slider, with extra margin on mobile */}
        <div className="flex flex-col items-center w-full">
          <div className="flex justify-center mt-6 gap-2 sm:gap-6">
            {Array.from({ length: problemMaxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProblemSliderIndex(idx)}
                className={`w-3 h-3 rounded-full ${problemSliderIndex === idx ? 'bg-[#2C73D2]' : 'bg-gray-300'} transition`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div> {/* closes .w-full.flex.flex-col.items-center */}
    </section>

    {/* ================= CLINIC SEARCH SECTION ================= */}
    <section className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pb-8 px-2 sm:px-4 overflow-x-hidden mt-16 mb-16 ${sectionSpacing}`}>
      <div className="w-full bg-white rounded-2xl shadow-lg py-8 sm:py-12 px-2 sm:px-4 md:px-10 mb-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C73D2] mb-2 text-center flex items-center justify-center gap-2">
          Find Top Dental Clinics in India
          <span className="text-xl sm:text-2xl md:text-3xl">🇮🇳</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#2C73D2] mb-8 text-center">Books appointments with India’s Finest Clinics – Verified, Rated and Recommended. 
          <br />Where Clinical Skill Meets Patient Trust.</p>
        <form className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 w-full max-w-2xl mb-8" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search by State/ UTs"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 min-w-[220px] px-6 py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] text-base focus:outline-none focus:border-[#F4A300] bg-white font-sans placeholder-gray-400"
            onChange={e => setSearch(e.target.value)}
            className="flex-1 min-w-[220px] px-6 py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] text-base focus:outline-none focus:border-[#F4A300] bg-white font-sans placeholder-gray-400"
          />
          <select
            value={selectedState}
            onChange={e => setSelectedState(e.target.value)}
            className="flex-1 min-w-[180px] px-6 py-3 rounded-lg border-2 border-[#2C73D2] text-[#2C73D2] text-base focus:outline-none focus:border-[#F4A300] bg-white font-sans"
          >
            <option value="">All States/UTs</option>
            {allStatesAndUTs.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <button
            type="submit"
            className="flex-1 min-w-[120px] px-6 py-3 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold text-lg shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition"
          >
            Search
          </button>
        </form>
        <div className="w-full mt-4 overflow-x-auto">
          {/* Clinic Cards Slider with nav arrows (like problem slider) */}
          <ClinicSlider />
          {/* End Demo Clinic Cards */}
          {filteredClinics.length === 0 ? (
            <></>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full">
              {filteredClinics.map((clinic, idx) => {
                // Use unique variable names to avoid redeclaration errors
                const clinicName = clinic.Name || clinic.name || "N/A";
                const clinicSpecialty = clinic.Specialty || clinic.specialty || "";
                const clinicCity = clinic.City || clinic.city || "";
                const clinicState = clinic.State || clinic.state || "";
                const clinicAddress = clinic.Address || clinic.address || "N/A";
                const clinicRating = clinic.Rating || clinic.rating || "N/A";
                const clinicWebsite = clinic.Website || clinic.website || "";
                const clinicImage = clinic.Image || clinic.image || require('../assets/doctor1.png');
                const clinicOpenTime = clinic.OpenTime || clinic.openTime || clinic["Open Time"] || "N/A";
                const clinicCloseTime = clinic.CloseTime || clinic.closeTime || clinic["Close Time"] || "N/A";
                const clinicContact = clinic.Contact || clinic.contact || clinic.Phone || clinic.phone || "";
                return (
                  <div key={idx} className="bg-[#f7f7f7] rounded-xl shadow p-6 flex flex-col items-start min-h-[220px]">
                    <span className="text-lg font-bold text-[#333333] mb-1">{clinicName}</span>
                    <span className="text-[#2C73D2] text-base font-medium mb-2">{clinicCity} • {clinicState}</span>
                    <div className="flex items-center gap-3 mb-2">
                      <img src={clinicImage} alt="Doctor" className="w-14 h-14 rounded-full object-cover border-2 border-[#fff]" />
                      <ul className="text-[#333333] text-sm ml-2 list-disc list-inside">
                        {clinicSpecialty && clinicSpecialty.split(',').map((s, i) => <li key={i}>{s.trim()}</li>)}
                      </ul>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill={i < Math.round(clinicRating) ? '#F4A300' : '#e5e7eb'} viewBox="0 0 20 20"><path d="M9.049  2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z" /></svg>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto w-full">
                      <div className="flex flex-row gap-3 w-full">
                        <a href="#book" className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition text-center flex items-center justify-center gap-2">
                          <img src={require('../assets/Book Now.png')} alt="Book Now" className="w-5 h-5 inline-block" />
                          <span>Book Now</span>
                        </a>
                        <a href={clinicWebsite} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-lg border border-[#2C73D2] text-[#2C73D2] font-semibold hover:bg-[#2C73D2] hover:text-white transition text-center">Website</a>
                      </div>
                      <div className="flex flex-row gap-3 w-full">
                        <a href={`https://wa.me/${clinicContact.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-lg bg-[#25D366] text-white font-semibold shadow hover:bg-[#128C7E] transition text-center flex items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 14.487c-.27-.135-1.588-.783-1.834-.872-.246-.09-.426-.135-.606.135-.18.27-.693.872-.85 1.052-.157.18-.314.202-.584.067-.27-.135-1.14-.42-2.17-1.34-.803-.715-1.345-1.597-1.504-1.867-.157-.27-.017-.416.118-.551.122-.122.27-.314.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.022-.472-.067-.135-.606-1.464-.83-2.006-.218-.524-.44-.453-.606-.462l-.515-.009c-.18 0-.472.067-.72.337-.247.27-.945.923-.945 2.25 0 1.327.967 2.607 1.102 2.788.135.18 1.905 2.91 4.623 3.963.646.222 1.15.355 1.543.455.648.165 1.238.142 1.703.086.52-.062 1.588-.648 1.813-1.274.225-.626.225-1.163.157-1.274-.067-.112-.247-.18-.517-.315z" /></svg>
                          WhatsApp
                        </a>
                        <a href={`https://maps.google.com/?q=${encodeURIComponent(clinicName + ' ' + clinicCity)}`} target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 rounded-lg border border-[#1BC47D] text-[#1BC47D] font-semibold hover:bg-[#1BC47D] hover:text-white transition text-center">Get Direction</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* ================= SPECIALITY SECTION ================= */}
    <section className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pb-16 px-2 sm:px-4 mt-16 mb-16 overflow-x-hidden ${sectionSpacing}`}>
      <div className="text-center mb-6 sm:mb-10 bg-white bg-opacity-90 rounded-2xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C73D2] mb-2 sm:mb-4 font-[Poppins]">Book an appointment for an in-clinic consultation</h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-lg font-[Poppins]">Find experienced dentists across all specialties.</p>
      </div>
      <div className="flex items-center w-full justify-center">
        <button
          onClick={() => setSpecialistIndex((prev) => Math.max(prev - 1, 0))}
          className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition mr-4 disabled:opacity-50"
          disabled={specialistIndex === 0}
          aria-label="Previous"
          style={{ height: '40px', width: '40px', fontSize: '1.25rem' }}
        >
          <FaChevronLeft />
        </button>
        <div className={`flex w-full justify-center items-center ${specialistsPerSlide === 1 ? 'gap-0' : 'gap-8'}`}>
          {specialists.slice(specialistIndex * specialistsPerSlide, specialistIndex * specialistsPerSlide + specialistsPerSlide).map((spec, idx) => {
            const globalIdx = specialistIndex * specialistsPerSlide + idx;
            const isFlipped = flippedSpecialists[globalIdx];
            return (
              <div
                key={spec.name}
                className="flip-card w-64 h-80 mx-2 cursor-pointer"
                onClick={() => {
                  const updated = [...flippedSpecialists];
                  updated[globalIdx] = !updated[globalIdx];
                  setFlippedSpecialists(updated);
                }}
                style={{ perspective: '1200px' }}
              >
                <div className={`flip-card-inner w-full h-full transition-transform duration-500 ${isFlipped ? 'flipped' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Side */}
                  <div className="flip-card-front flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 w-64 h-80 absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 shadow">
                      <img
                        src={spec.img}
                        alt={spec.name}
                        className="w-20 h-20 object-cover rounded-full"
                      />
                    </div>
                    <div className="text-base font-bold text-[#2C73D2] mb-2 text-center w-full leading-tight">{spec.name}</div>
                    <div className="text-sm text-gray-500 mb-4 text-center">{spec.desc}</div>
                    <div className="mt-auto w-full flex justify-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white text-xs font-semibold shadow transition-transform duration-200 hover:scale-105 animate-pulse">
                        Tap to see details
                      </span>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 border border-[#2C73D2]/10 w-64 h-80 absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="text-base font-bold text-[#2C73D2] mb-2 text-center w-full leading-tight">{spec.name}</div>
                    <ul className="text-[#333333] text-left w-full mb-4" style={{ fontSize: '15px', listStyleType: 'disc', paddingLeft: '1.2em' }}>
                      {Array.isArray(spec.points)
                        ? spec.points.map((point, i) => <li key={i}>{point}</li>)
                        : <li>{spec.points}</li>}
                    </ul>
                    <button className="mt-auto px-4 py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow hover:from-[#F4A300] hover:to-[#2C73D2] transition block text-center cursor-pointer w-full">
                      Book Clinic
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setSpecialistIndex((prev) => Math.min(prev + 1, specialistMaxIndex))}
          className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition ml-4 disabled:opacity-50"
         
          disabled={specialistIndex >= specialistMaxIndex}
          aria-label="Next"
          style={{ height: '40px', width: '40px', fontSize: '1.25rem' }}
        >
          <FaChevronRight />
        </button>
      </div>
      {/* Dots: Always show, centered below slider */}
      <div className="flex justify-center mt-6 gap-2 sm:gap-3">
        {Array.from({ length: specialistMaxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSpecialistIndex(idx)}
            className={`w-3 h-3 rounded-full ${specialistIndex === idx ? 'bg-[#2C73D2]' : 'bg-gray-300'} transition`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>

    {/* ================= PRODUCT SECTION ================= */}
    {/* Products Shop Section (now with slider, nav arrows, and drop shadow) */}
    <div className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pb-12 px-2 sm:px-4 mt-16 mb-16 overflow-x-hidden ${sectionSpacing}`}>
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C73D2] mb-1 sm:mb-2 font-[Poppins]">Explore Dental Essentials</h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-700">Quality dental products for your oral health needs.</p>
      </div>
      {/* Products Slider - Now with navigation arrows and drop shadow effect */}
      <div className="relative w-full flex flex-col items-center">
        {/* Product boxes with nav arrows on the sides and nav dots below */}
        <div className="flex items-center w-full justify-between mb-4 relative">
          <button
            onClick={() => setProductSliderIndex((prev) => prev > 0 ? prev - 1 : Math.ceil(products.length / 3) - 1)}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-[#2C73D2] hover:text-white transition border-2 border-[#2C73D2] z-10 mx-2"
            disabled={false}
            aria-label="Previous Product"
            style={{ position: 'relative' }}
          >
            <FaChevronLeft />
          </button>
          <div className="flex w-full justify-center -mx-2" style={{ overflowX: 'hidden' }}>
            {products.slice(productSliderIndex * 3, productSliderIndex * 3 + 3).map((product, idx) => (
              <div key={idx} className="flex-shrink-0 w-full sm:w-[240px] mx-2 flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-4 border border-[#2C73D2]/10 min-h-[180px] justify-start snap-center">
                <img src={product.img} alt={product.name} className="w-28 h-28 object-contain mb-2" />
                <div className="text-base font-semibold text-[#2C73D2] mb-1 text-center">{product.name}</div>
                <Link to="/consult" className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow-lg hover:from-[#F4A300] hover:to-[#2C73D2] transition text-center w-full text-sm">
                  Know More
                </Link>
              </div>
            ))}
          </div>
          <button
            onClick={() => setProductSliderIndex((prev) => prev < Math.ceil(products.length / 3) - 1 ? prev + 1 : 0)}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-[#2C73D2] hover:text-white transition border-2 border-[#2C73D2] z-10 mx-2"
            disabled={false}
            aria-label="Next Product"
            style={{ position: 'relative' }}
          >
            <FaChevronRight />
          </button>
        </div>
        {/* Nav Dots below the slider */}
        <div className="flex gap-2 mt-2 mb-4">
          {Array.from({ length: Math.ceil(products.length / 3) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setProductSliderIndex(idx)}
              className={`w-3 h-3 rounded-full ${productSliderIndex === idx ? 'bg-[#2C73D2]' : 'bg-gray-300'} transition`}
              aria-label={`Go to product slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>

    {/* ================= TESTIMONIAL SECTION ================= */}
    {/* Testimonials Section */}
    <div className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pb-16 px-2 sm:px-4 mt-16 mb-16 overflow-x-hidden ${sectionSpacing}`}>
      <div className="text-center mb-4 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C73D2] mb-1 sm:mb-2 font-[Poppins]">What our users have to say</h2>
      </div>
      <div className="flex items-center w-full justify-center">
        <button
          onClick={() => setTestimonialIndex((prev) => Math.max(prev - 1, 0))}
          className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition mr-4 disabled:opacity-50"
          disabled={testimonialIndex === 0}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
        <div className="flex gap-8 py-6 w-full justify-center">
          {testimonials.slice(testimonialIndex, testimonialIndex + 1).map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-[#f7f7f7] rounded-2xl shadow-lg p-6 w-80 h-80 mx-2">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-full"
                  onError={e => { e.target.onerror = null; e.target.src = require('../logo.svg'); }}
                />
              </div>
              <div className="text-lg font-bold text-[#2C73D2] mb-2 text-center">{item.name}</div>
              <div className="text-base text-[#333333] text-center mb-2">{item.text}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setTestimonialIndex((prev) => Math.min(prev + 1, testimonials.length - 1))}
          className="p-2 rounded-full bg-white shadow hover:bg-[#2C73D2] hover:text-white transition ml-4 disabled:opacity-50"
          disabled={testimonialIndex === testimonials.length - 1}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>

    {/* ================= SUBSCRIBE SECTION ================= */}
    {/* Newsletter Subscription Section */}
    <div className={`w-full max-w-full mx-0 sm:max-w-5xl sm:mx-auto pb-12 px-2 sm:px-4 mt-16 mb-16 overflow-x-hidden ${sectionSpacing}`}>
      <div className="w-full bg-[#2C73D2] rounded-2xl shadow-lg py-8 sm:py-12 px-2 sm:px-4 md:px-10 mb-12 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 text-center">Join Our Mailing List</h2>
        <p className="text-base sm:text-lg text-white mb-4 sm:mb-8 text-center">Subscribe to get the latest updates on dental care tips, clinic openings, and special offers.</p>
        <form className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 w-full max-w-2xl" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-[220px] px-6 py-3 rounded-lg border-2 border-white text-white text-base focus:outline-none focus:border-[#F4A300] bg-[#2C73D2] placeholder-gray-200"
            required
          />
          <button
            type="submit"
            className="flex-1 min-w-[120px] px-6 py-3 rounded-lg bg-gradient-to-r from-[#F4A300] to-[#2C73D2] text-white font-semibold text-lg shadow drop-shadow-md hover:from-[#2C73D2] hover:to-[#F4A300] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* ================= FOOTER SECTION ================= */}
    {/* <Footer /> */}
    {/* ================= FOOTER SECTION ================= */}
    {/* <Footer /> */}
    {/* End of main content */}
    </div>
  </>);
};

export default Home;
