'use client';

import { Star } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  // Afficher les 3 premiers avis sur la homepage
  const featuredTestimonials = testimonials.slice(0, 3);

  // Calculer la moyenne des notes
  const averageRating =
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gold-100 text-gold-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Avis clients
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-earth-800 mb-3 sm:mb-4">
            Ce que nos clientes disent
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(averageRating)
                      ? 'text-gold-500 fill-gold-500'
                      : 'text-earth-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-earth-600 font-medium">
              {averageRating.toFixed(1)}/5
            </span>
            <span className="text-earth-500 text-sm">
              ({testimonials.length} avis)
            </span>
          </div>
          <p className="text-sm sm:text-base text-earth-600 max-w-2xl mx-auto px-4">
            Découvrez les expériences de nos clientes avec les plantes
            traditionnelles RootsRemedy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
