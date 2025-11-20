import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, Lock, CheckCircle, BarChart3, FileText, Heart, Hospital, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Hospital className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🏥 מרכז רשמי להגשת תביעות וסיוע
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              מערכת ממשלתית לטיפול בנפגעי Medical Smile | מאובטח ומוצפן
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/submit-claim">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
                  📋 הגשת תיק חדש
                </Button>
              </Link>
              <Link href="/transparency">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                  🔍 דשבורד שקיפות
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">הצפנה מלאה</h3>
              <p className="text-muted-foreground">
                כל המידע מוצפן בתקן בנקאי SSL 256-bit
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-bold text-lg mb-2">מאושר רשמית</h3>
              <p className="text-muted-foreground">
                בפיקוח משרד הבריאות ורשות התחרות
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-bold text-lg mb-2">שקיפות מלאה</h3>
              <p className="text-muted-foreground">
                כל העברה כספית מתועדת ומפורסמת
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">סטטיסטיקות המערכת</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <FileText className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-4xl font-bold text-primary mb-2">1,247</div>
              <div className="text-sm text-muted-foreground">תיקים שטופלו</div>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <Heart className="w-10 h-10 mx-auto mb-3 text-secondary" />
              <div className="text-4xl font-bold text-secondary mb-2">₪2.4M</div>
              <div className="text-sm text-muted-foreground">תרומות שנאספו</div>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 mx-auto mb-3 text-accent" />
              <div className="text-4xl font-bold text-accent mb-2">892</div>
              <div className="text-sm text-muted-foreground">נפגעים שקיבלו טיפול</div>
            </Card>
            <Card className="p-6 text-center bg-card hover:shadow-lg transition-shadow">
              <Hospital className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-4xl font-bold text-primary mb-2">34</div>
              <div className="text-sm text-muted-foreground">קליניקות שותפות</div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">איך זה עובד?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="font-bold text-lg mb-2">שלב 1: הגשת תיק</h3>
              <p className="text-muted-foreground text-sm">
                מילוי טופס מקוון מאובטח עם העלאת מסמכים
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-bold text-lg mb-2">שלב 2: אימות וועדה</h3>
              <p className="text-muted-foreground text-sm">
                בדיקת מסמכים ואישור על ידי ועדת מומחים
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="font-bold text-lg mb-2">שלב 3: התאמת מימון</h3>
              <p className="text-muted-foreground text-sm">
                חיפוש תורם או הקצאה מהקרן הכללית
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="font-bold text-lg mb-2">שלב 4: העברה לקליניקה</h3>
              <p className="text-muted-foreground text-sm">
                תיאום טיפול ישיר עם קליניקה מאושרת
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">זקוק לסיוע רפואי דחוף?</h2>
          <p className="text-xl mb-8 opacity-95">הגש תיק עכשיו וקבל מענה תוך 48 שעות</p>
          <Link href="/submit-claim">
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-10 py-6 font-bold">
              התחל הגשת תיק ➜
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
