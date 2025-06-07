"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function CTA() {
  return (
      <section className="container mx-auto px-4 py-32">
        <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who save hours every week with DevShelfs curated resources.
          </p>
          <Link href="/docs">
            <Button 
              variant="secondary" 
              className="text-base px-8 py-6 font-medium"
              size="lg"
            >
              Explore DevShelf
            </Button>
          </Link>
        </div>
      </section>
  )
}

export default CTA