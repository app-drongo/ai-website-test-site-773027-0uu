'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'TechFlow',
  tagline: 'Simple, powerful technology solutions that work seamlessly for everyone.',
  copyright: '© 2024 TechFlow. All rights reserved.',

  // Company Links
  companyLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
  ],

  // Product Links
  productLinks: [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
  ],

  // Support Links
  supportLinks: [
    { label: 'Help Center', href: '/help' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Contact', href: '/contact' },
  ],

  // Legal Links
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],

  // Contact Info
  email: 'hello@techflow.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, San Francisco, CA 94105',

  // Social Links
  socialLinks: [
    { label: 'Twitter', href: 'https://twitter.com/techflow' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/techflow' },
    { label: 'GitHub', href: 'https://github.com/techflow' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  return (
    <section id="footer" className="bg-muted text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              <span data-editable="companyName">{config.companyName}</span>
            </h3>
            <p className="text-sm mb-6 max-w-md">
              <span data-editable="tagline">{config.tagline}</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span data-editable="email">{config.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span data-editable="phone">{config.phone}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span data-editable="address">{config.address}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {config.productLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`productLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`productLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {config.supportLinks.map((link, idx) => (
                <li key={idx}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    onClick={() => handleLinkClick(link.href)}
                    data-editable-href={`supportLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`supportLinks[${idx}].label`}>{link.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Copyright */}
          <p className="text-sm">
            <span data-editable="copyright">{config.copyright}</span>
          </p>

          {/* Legal Links & Social */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              {config.legalLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {config.socialLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`socialLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
