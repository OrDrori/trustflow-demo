import { Link } from "wouter";
import { Phone, Mail, MapPin, Shield, CheckCircle, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">קישורים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">אודות</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-muted-foreground hover:text-primary transition-colors">תנאי שימוש</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">מדיניות פרטיות</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-muted-foreground hover:text-primary transition-colors">שאלות נפוצות</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">יצירת קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>053-3030931</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@trustflow.org.il</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>רחוב הבריאות 15, תל אביב</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Security */}
          <div>
            <h3 className="font-bold text-lg mb-4">אבטחה</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Lock className="w-4 h-4 text-secondary" />
                <span>הצפנה מלאה SSL</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-secondary" />
                <span>תקן ISO 27001</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-secondary" />
                <span>מאושר משרד הבריאות</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 מרכז התגובה למשברים | כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
