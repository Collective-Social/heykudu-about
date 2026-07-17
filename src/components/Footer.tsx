import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-section-gap-mobile md:py-section-gap-desktop border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="space-y-6">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="heykudu"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-sm">
            Precision tracking for the next generation of medical professionals. Standardizing clinical excellence globally.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Product</h4>
          <ul className="space-y-4">
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/features/epa-tracking">
                Attendance & WBAs
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/features/epa-tracking">
                EPA Tracking
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/features/geo-fence">
                Geo-Fence Analytics
              </Link>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="https://heykudu.com" target="_blank" rel="noopener noreferrer">
                Go to Main App
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider">Resources</h4>
          <ul className="space-y-4">
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/guide">
                Clinical Training Guide
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/faq">
                Support & FAQs
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/ai-context">
                AI & Agent Context
              </Link>
            </li>
            <li>
              <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="/contact">
                Contact & Demo request
              </Link>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="https://heykudu.com" target="_blank" rel="noopener noreferrer">
                Join heykudu App
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-16 pt-8 border-t border-outline-variant/30 text-center md:text-left">
        <p className="text-on-surface-variant font-label-md text-label-md opacity-70">
          © 2026 heykudu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
