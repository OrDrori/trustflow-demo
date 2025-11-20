import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Shield, CreditCard } from "lucide-react";

const mockCases = [
  { id: "CASE-802", age: 72, city: "תל אביב", painLevel: "קריטי", urgentCare: true, amount: 5000, priority: "critical", policeReport: true, loanTaken: true, mercyScore: 92 },
  { id: "CASE-789", age: 58, city: "חיפה", painLevel: "חמור", urgentCare: true, amount: 8500, priority: "high", policeReport: true, loanTaken: false, mercyScore: 78 },
  { id: "CASE-756", age: 45, city: "באר שבע", painLevel: "בינוני", urgentCare: false, amount: 3200, priority: "medium", policeReport: false, loanTaken: true, mercyScore: 65 },
  { id: "CASE-734", age: 68, city: "ירושלים", painLevel: "חמור", urgentCare: true, amount: 6700, priority: "high", policeReport: true, loanTaken: true, mercyScore: 85 },
  { id: "CASE-712", age: 54, city: "נתניה", painLevel: "בינוני", urgentCare: false, amount: 4100, priority: "medium", policeReport: false, loanTaken: false, mercyScore: 58 },
  { id: "CASE-698", age: 76, city: "רחובות", painLevel: "קריטי", urgentCare: true, amount: 9200, priority: "critical", policeReport: true, loanTaken: true, mercyScore: 95 },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "critical": return "bg-destructive text-destructive-foreground";
    case "high": return "bg-orange-500 text-white";
    case "medium": return "bg-accent text-accent-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getPriorityLabel = (priority: string) => {
  switch (priority) {
    case "critical": return "קריטית";
    case "high": return "גבוהה";
    case "medium": return "בינונית";
    default: return "נמוכה";
  }
};

export default function DonorDashboard() {
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 mx-auto mb-4 text-secondary" />
          <h1 className="text-4xl font-bold mb-4">💚 דשבורד תורמים</h1>
          <p className="text-xl text-muted-foreground">עזור לנפגעי Medical Smile - כל תרומה עוברת ישירות לקליניקה</p>
        </div>

        <div className="flex gap-3 mb-8 justify-center flex-wrap">
          <Button variant="default">הכל</Button>
          <Button variant="outline">עדיפות גבוהה (70+)</Button>
          <Button variant="outline">קריטי (85+)</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockCases.map((caseItem) => (
            <Card key={caseItem.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <Badge className={getPriorityColor(caseItem.priority)}>{getPriorityLabel(caseItem.priority)}</Badge>
                <span className="text-sm text-muted-foreground">תיק #{caseItem.id}</span>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">👤 גיל:</span>
                  <span>{caseItem.age}</span>
                  <span className="mx-2">|</span>
                  <MapPin className="w-4 h-4" />
                  <span>{caseItem.city}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">🏥 רמת כאב:</span>
                  <span>{caseItem.painLevel}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">💊 טיפול דחוף:</span>
                  <span>{caseItem.urgentCare ? "כן" : "לא"}</span>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg mb-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">סכום נדרש:</p>
                <p className="text-3xl font-bold text-primary">₪{caseItem.amount.toLocaleString()}</p>
              </div>
              <div className="flex gap-2 mb-4 flex-wrap">
                {caseItem.policeReport && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Shield className="w-3 h-3 ml-1" />תלונה במשטרה
                  </Badge>
                )}
                {caseItem.loanTaken && (
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    <CreditCard className="w-3 h-3 ml-1" />נלקחה הלוואה
                  </Badge>
                )}
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90">💚 תרום לתיק זה</Button>
              <p className="text-center mt-3 text-xs text-muted-foreground">ציון עדיפות: {caseItem.mercyScore}/100</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">💚 תרומה כללית לקרן</h2>
          <p className="text-lg mb-6 opacity-95">לא יכול להחליט? תרום לקרן הכללית ואנו נקצה את הכסף לתיק הדחוף ביותר</p>
          <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-bold">תרום עכשיו ➜</Button>
        </Card>
      </div>
    </div>
  );
}
