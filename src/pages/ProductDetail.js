import React from "react";
import { useParams } from "react-router-dom";
import FullPageLoader from "../components/FullPageLoader";

import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <FullPageLoader />;

  // Support multiple images (array)
  const images = Array.isArray(product.images) ? product.images : [product.image].filter(Boolean);
  const [imgIndex, setImgIndex] = React.useState(0);

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col items-center">
          {/* Image Gallery */}
          {images.length > 1 ? (
            <div className="w-64 h-64 mb-4 flex flex-col items-center">
              <img src={images[imgIndex]} alt={product.name} className="w-full h-full object-contain rounded-lg border" />
              <div className="flex gap-2 mt-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`w-8 h-8 rounded border-2 ${imgIndex === idx ? 'border-[#2C73D2]' : 'border-gray-300'} bg-white flex items-center justify-center p-1`}
                    onClick={() => setImgIndex(idx)}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain rounded" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <img src={images[0]} alt={product.name} className="w-64 h-64 object-contain mb-4 rounded-lg" />
          )}
          {/* Buy Links Section */}
          {product.buyLinks && product.buyLinks.length > 0 && (
            <div className="flex flex-col gap-2 mt-4 w-full">
              {product.buyLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow drop-shadow-md hover:from-[#F4A300] hover:to-[#2C73D2] transition text-center"
                >
                  Buy on {link.name}
                </a>
              ))}
            </div>
          )}
          {/* Reviews Section */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-6 w-full">
              <h3 className="text-lg font-bold text-[#2C73D2] mb-2">Reviews</h3>
              <div className="flex flex-col gap-3">
                {product.reviews.map((review, idx) => (
                  <div key={idx} className="bg-gray-100 rounded-lg p-3">
                    <div className="font-semibold text-[#2C73D2]">{review.user}</div>
                    <div className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                    <div className="text-gray-700 text-sm mt-1">{review.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#2C73D2] mb-2">{product.name}</h2>
          <div className="text-lg text-[#F4A300] font-bold mb-2">{product.price}</div>
          <div className="text-gray-700 mb-4">{product.description}</div>
          {/* Add more product details here if needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
