"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Award, CheckCircle, Sparkles, Star, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="A mi manera"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Order Now", href: "#contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="A mi manera"
          description="Experience the finest artisan pastries, handcrafted daily with premium ingredients and passion."
          buttons={[
            { text: "Explore Our Menu", href: "#products" },
            { text: "Order Today", href: "#contact" },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/baker-holds-homemade-craft-bread-his-hands_166373-749.jpg",              imageAlt: "Fresh pastries display"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/fresh-croissants-with-croissant-with-powdered-sugar-wooden-table_181624-23604.jpg",              imageAlt: "Croissants and artisan breads"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/cutting-slice-strawberry-pie-wooden-board_114579-61920.jpg",              imageAlt: "Danish pastries and sweet treats"
            },
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Story"
          tagIcon={Award}
          title="Crafted with Passion, Made for You"
          description="A mi manera was founded on the belief that every pastry should tell a story of dedication and quality. We source the finest ingredients from local suppliers and use time-honored techniques to create pastries that are as beautiful as they are delicious. From our kitchen to your table, we ensure every bite reflects our commitment to excellence."
          metrics={[
            { value: "15+", title: "Years of Expertise" },
            { value: "500+", title: "Happy Customers Daily" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/man-baker-sprinkles-donuts-with-colorful-sweets_1303-32325.jpg"
          imageAlt="A mi manera artisan bakery kitchen"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Our Signature Collection"
          description="Discover our most popular pastries, carefully selected for their exceptional taste and artisan quality."
          tag="Best Sellers"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",              name: "Classic French Croissant",              price: "$4.50",              variant: "Butter | Almond | Chocolate",              imageSrc: "http://img.b2bpic.net/free-photo/air-croissant-with-strawberry-syrup-top-glass-milk_140725-9770.jpg",              imageAlt: "Classic French croissant"
            },
            {
              id: "2",              name: "Berry Danish Delight",              price: "$5.00",              variant: "Raspberry | Blueberry | Mixed",              imageSrc: "http://img.b2bpic.net/free-photo/homemade-blackberry-galette_114579-1306.jpg",              imageAlt: "Berry Danish pastry"
            },
            {
              id: "3",              name: "Chocolate Eclair",              price: "$5.50",              variant: "Dark | Milk | White Chocolate",              imageSrc: "http://img.b2bpic.net/free-photo/eclairs-profiteroles-with-black-chocolate-white-chocolate-with-custard-inside-traditional-french-dessert-top-view_114579-8132.jpg",              imageAlt: "Chocolate eclair"
            },
            {
              id: "4",              name: "Cinnamon Dream Roll",              price: "$4.75",              variant: "Regular | with Raisins | Vegan",              imageSrc: "http://img.b2bpic.net/free-photo/traditional-cinnamon-buns-white-table-homemade-sweet-buns_127032-2691.jpg",              imageAlt: "Cinnamon roll"
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyOne
          tag="Why Choose Us"
          tagIcon={CheckCircle}
          title="Premium Quality Every Bite"
          description="We go beyond ordinary pastries to deliver an extraordinary experience through our commitment to quality, innovation, and customer satisfaction."
          accordionItems={[
            {
              id: "1",              title: "Artisan Techniques & Heritage",              content: "Our pastry chefs use traditional French techniques combined with modern innovation to create unique flavors that delight the senses. Each pastry is a masterpiece of texture and taste."
            },
            {
              id: "2",              title: "Premium Local Ingredients",              content: "We partner with local farmers and suppliers to source the finest butter, chocolate, fruits, and grains. Supporting our community means better quality for you."
            },
            {
              id: "3",              title: "Freshness Guaranteed",              content: "All our pastries are baked fresh daily in our kitchen. Nothing is frozen or pre-made. You'll taste the difference in every bite of our daily creations."
            },
            {
              id: "4",              title: "Customization Available",              content: "Special dietary needs? We offer vegan, gluten-free, and sugar-free options. Let us know your preferences, and we'll craft the perfect pastry for you."
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/man-baker-sprinkles-donuts-with-colorful-sweets_1303-32325.jpg"
          imageAlt="Artisan pastry preparation"
          useInvertedBackground={true}
          mediaPosition="right"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Love from Our Customers"
          description="Don't just take our word for it. See what our happy customers have to say about their A mi manera experience."
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",              name: "Maria Gonzalez",              role: "Regular Customer",              testimonial: "A mi manera pastries are absolutely exceptional! The croissants are so buttery and flaky, and the service is always warm and welcoming. I've become a daily regular!",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",              imageAlt: "Maria Gonzalez portrait"
            },
            {
              id: "2",              name: "Carlos Rivera",              role: "Event Planner",              testimonial: "I've ordered pastries from A mi manera for several corporate events, and they never disappoint. The quality is consistent, and the variety is impressive. Highly recommended!",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1563.jpg",              imageAlt: "Carlos Rivera portrait"
            },
            {
              id: "3",              name: "Elena Moreno",              role: "Local Business Owner",              testimonial: "The attention to detail is remarkable. Each pastry is beautifully presented and tastes even better than it looks. A mi manera has become my go-to place for special occasions.",              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg",              imageAlt: "Elena Moreno portrait"
            },
            {
              id: "4",              name: "Diego Santos",              role: "Weekend Regular",              testimonial: "Fresh, delicious, and affordable. What more could you ask for? The team here genuinely cares about their craft, and it shows in every pastry. A mi manera is a gem!",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1674.jpg",              imageAlt: "Diego Santos portrait"
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Indulge?"
          tagIcon={Heart}
          title="Visit A mi manera Today"
          description="Stop by our bakery to experience the magic firsthand. Enjoy a fresh pastry with our signature coffee, or order ahead for your next celebration."
          buttons={[
            { text: "Reserve Online", href: "https://example.com/reserve" },
            { text: "Call Us", href: "tel:+1234567890" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="A mi manera"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
