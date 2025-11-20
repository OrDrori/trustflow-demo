import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Heart, Hospital, CheckCircle, RefreshCw, FileText } from "lucide-react";

const auditLog = [
  { id: 1, type: "donation", date: "2025-01-15", description: "תרומה התקבלה עבור תיק CASE-802", amount: 5000, verified: true },
  { id: 2, type: "transfer", date: "2025-01-14", description: "הועברו כספים לקליניקה עבור תיק CASE-789", amount: 8500, verified: true, reference: "TRF-2025-001" },
  { id: 3, type: "approval", date: "2025-01-14", description: "תיק CASE-756 אושר על ידי ועדת האישורים", amount: 0, verified: true },
  { id: 4, type: "donation", date: "2025-01-13", description: "תרומה כללית לקרן", amount: 2500, verified: true },
  { id: 5, type: "transfer", date: "2025-01-12", description: "הועברו כספים לקליניקה עבור תיק CASE-734", amount: 6700, verified: true, reference: "TRF-2025-002" },
  { id: 6, type: "status", date: "2025-01-12", description: "תיק CASE-712 עודכן לסטטוס 'ממתין למימון'", amount: 0, verified: true },
  { id: 7, type: "donation", date: "2025-01-11", description: "תרומה התקבלה עבור תיק CASE-698", amount: 9200, verified: true },
  { id: 8, type: "approval", date: "2025-01-10", description: "תיק CASE-802 אושר על ידי ועדת האישורים", amount: 0, verified: true },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "donation": return <Heart className="w-8 h-8 text-secondary" />;
    case "transfer": return <Hospital className="w-8 h-8 text-primary" />;
    case "approval": return <CheckCircle className="w-8 h-8 text-blue-500" />;
    case "status": return <RefreshCw className="w-8 h-8 text-accent" />;
    default: return <FileText className="w-8 h-8 text-muted-foreground" />;
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "donation": return "תרומה התקבלה";
    case "transfer": return "העברה לקליניקה";
    case "approval": return "אישור תיק";
    case "status": return "עדכון סטטוס";
    default: return "פעולה";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "donation": return "border-secondary";
    case "transfer": return "border-primary";
    case "approval": return "border-blue-500";
    case "status": return "border-accent";
    default: return "border-muted";
  }
};

export default function Transparency() {
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container">
        <div className="text-center mb-12">
          <BarChart3 className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">🔍 דשבורד שקיפות וביקורת</h1>
          <p className="text-xl text-muted-foreground">כל העברה כספית מתועדת ומפורסמת לציבור</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-green-50 border-green-200">
            <Heart className="w-10 h-10 mx-auto mb-3 text-secondary" />
            <div className="text-sm text-muted-foreground mb-1">סה"כ תרומות שנאספו</div>
            <div className="text-3xl font-bold text-secondary">₪2.4M</div>
          </Card>
          <Card className="p-6 text-center bg-blue-50 border-blue-200">
            <Hospital className="w-10 h-10 mx-auto mb-3 text-primary" />
            <div className="text-sm text-muted-foreground mb-1">סה"כ הועבר לקליניקות</div>
            <div className="text-3xl font-bold text-primary">₪2.1M</div>
          </Card>
          <Card className="p-6 text-center bg-orange-50 border-orange-200">
            <FileText className="w-10 h-10 mx-auto mb-3 text-accent" />
            <div className="text-sm text-muted-foreground mb-1">תיקים פעילים</div>
            <div className="text-3xl font-bold text-accent">127</div>
          </Card>
          <Card className="p-6 text-center bg-purple-50 border-purple-200">
            <CheckCircle className="w-10 h-10 mx-auto mb-3 text-purple-600" />
            <div className="text-sm text-muted-foreground mb-1">תיקים שהושלמו</div>
            <div className="text-3xl font-bold text-purple-600">892</div>
          </Card>
        </div>

        {/* Audit Log */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">יומן ביקורת ציבורי</h2>
          <div className="space-y-4">
            {auditLog.map((entry) => (
              <Card key={entry.id} className={`p-6 border-r-4 ${getTypeColor(entry.type)} hover:shadow-lg transition-shadow`}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">{getTypeIcon(entry.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-primary">{getTypeLabel(entry.type)}</h3>
                      <span className="text-sm text-muted-foreground">{entry.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{entry.description}</p>
                    {entry.amount > 0 && (
                      <div className="inline-block bg-muted px-4 py-2 rounded-lg">
                        <strong>סכום:</strong> ₪{entry.amount.toLocaleString()}
                      </div>
                    )}
                    {entry.reference && (
                      <div className="mt-2 text-xs text-muted-foreground">
                        <strong>אסמכתא:</strong> {entry.reference}
                      </div>
                    )}
                  </div>
                  {entry.verified && (
                    <div className="flex-shrink-0">
                      <Badge className="bg-secondary text-secondary-foreground">✅ אומת</Badge>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Monthly Report */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">📊 דוח חודשי - ינואר 2025</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-right py-3 px-4 font-bold">קטגוריה</th>
                  <th className="text-center py-3 px-4 font-bold">כמות</th>
                  <th className="text-left py-3 px-4 font-bold">סכום (₪)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">תרומות שהתקבלו</td>
                  <td className="text-center py-3 px-4">156</td>
                  <td className="text-left py-3 px-4 font-bold">₪487,300</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">העברות לקליניקות</td>
                  <td className="text-center py-3 px-4">89</td>
                  <td className="text-left py-3 px-4 font-bold">₪412,500</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">תיקים חדשים</td>
                  <td className="text-center py-3 px-4">134</td>
                  <td className="text-left py-3 px-4">-</td>
                </tr>
                <tr className="bg-muted/50 font-bold">
                  <td className="py-3 px-4">יתרת קרן</td>
                  <td className="text-center py-3 px-4">-</td>
                  <td className="text-left py-3 px-4 text-secondary">₪74,800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
