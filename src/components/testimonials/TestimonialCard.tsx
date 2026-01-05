'use client';

import { Star, CheckCircle } from 'lucide-react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-earth-100 h-full flex flex-col">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? 'text-gold-500 fill-gold-500'
                : 'text-earth-200'
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-earth-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
        "{testimonial.text}"
      </p>

      {/* Product */}
      {testimonial.product && (
        <p className="text-xs text-sage-600 mb-3">
          Produit : {testimonial.product}
        </p>
      )}

      {/* Author */}
      <div className="flex items-center justify-between pt-4 border-t border-earth-100">
        <div>
          <p className="font-medium text-earth-800 text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-earth-500">{testimonial.location}</p>
        </div>
        {testimonial.verified && (
          <div className="flex items-center gap-1 text-sage-600">
            <CheckCircle className="h-4 w-4" />
            <span className="text-xs">Achat vérifié</span>
          </div>
        )}
      </div>
    </div>
  );
}
