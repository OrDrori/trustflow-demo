import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">מערכת אור חדש - עזרה לנפגעי חברת ״מדיקל סמייל״</h1>
                <p className="text-xs text-muted-foreground">מערכת בגרסת TrustFlow - נבנה ע״י אור דרורי</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="text-sm font-medium hover:text-primary transition-colors">דף הבית</a>
            </Link>
            <Link href="/submit-claim">
              <a className="text-sm font-medium hover:text-primary transition-colors">הגשת תיק</a>
            </Link>
            <Link href="/donor-dashboard">
              <a className="text-sm font-medium hover:text-primary transition-colors">דשבורד תורמים</a>
            </Link>
            <Link href="/transparency">
              <a className="text-sm font-medium hover:text-primary transition-colors">שקיפות וביקורת</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm font-medium hover:text-primary transition-colors">צור קשר</a>
            </Link>
          </nav>

          {/* Phone and CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">053-3030931</span>
            </div>
            <Link href="/submit-claim">
              <Button className="bg-secondary hover:bg-secondary/90">
                הגש תיק חדש
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/">
                <a className="text-sm font-medium hover:text-primary transition-colors">דף הבית</a>
              </Link>
              <Link href="/submit-claim">
                <a className="text-sm font-medium hover:text-primary transition-colors">הגשת תיק</a>
              </Link>
              <Link href="/donor-dashboard">
                <a className="text-sm font-medium hover:text-primary transition-colors">דשבורד תורמים</a>
              </Link>
              <Link href="/transparency">
                <a className="text-sm font-medium hover:text-primary transition-colors">שקיפות וביקורת</a>
              </Link>
              <Link href="/contact">
                <a className="text-sm font-medium hover:text-primary transition-colors">צור קשר</a>
              </Link>
              <div className="flex items-center gap-2 text-primary pt-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">053-3030931</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
