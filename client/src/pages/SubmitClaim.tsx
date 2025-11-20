import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { CheckCircle, User, Hospital, Paperclip, FileCheck } from "lucide-react";
import { toast } from "sonner";

export default function SubmitClaim() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    damageDescription: "",
    painLevel: "",
    urgentCare: false,
    estimatedCost: "",
    loanTaken: "",
    policeReport: "",
    consent1: false,
    consent2: false,
    consent3: false,
  });

  const steps = [
    { id: 1, title: "פרטים אישיים", icon: User },
    { id: 2, title: "נזק רפואי", icon: Hospital },
    { id: 3, title: "מסמכים", icon: Paperclip },
    { id: 4, title: "סיכום", icon: FileCheck },
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (!formData.consent1 || !formData.consent2 || !formData.consent3) {
      toast.error("יש לאשר את כל תנאי השימוש");
      return;
    }
    toast.success("התיק נקלט בהצלחה! מספר תיק: CASE-1234");
    // Reset form or redirect
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((s, idx) => (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      step >= s.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-center">{s.title}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-colors ${
                      step > s.id ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-8">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <User className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h2 className="text-2xl font-bold">שלב 1 מתוך 4: פרטים אישיים</h2>
                <p className="text-muted-foreground mt-2">
                  כל המידע מוצפן ומאובטח לפי תקן ISO 27001
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">שם מלא *</Label>
                  <Input
                    id="fullName"
                    placeholder="שם פרטי ומשפחה"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="idNumber">תעודת זהות * 🔒</Label>
                  <Input
                    id="idNumber"
                    placeholder="9 ספרות ללא מקפים"
                    value={formData.idNumber}
                    onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground mt-1">שדה מוצפן</p>
                </div>

                <div>
                  <Label htmlFor="phone">טלפון נייד *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="05X-XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="email">דוא"ל</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="city">עיר מגורים *</Label>
                  <Input
                    id="city"
                    placeholder="עיר"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="address">כתובת מלאה *</Label>
                  <Textarea
                    id="address"
                    placeholder="רחוב, מספר בית, דירה"
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Medical Damage */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Hospital className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h2 className="text-2xl font-bold">שלב 2 מתוך 4: תיאור הנזק הרפואי</h2>
                <p className="text-muted-foreground mt-2">ספר לנו על הבעיה הרפואית שנגרמה</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="damageDescription">תיאור מפורט של הנזק *</Label>
                  <Textarea
                    id="damageDescription"
                    placeholder="תאר את הבעיה הרפואית, הכאב, וההשפעה על חיי היום-יום"
                    rows={6}
                    value={formData.damageDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, damageDescription: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>רמת כאב נוכחית *</Label>
                  <RadioGroup
                    value={formData.painLevel}
                    onValueChange={(value) => setFormData({ ...formData, painLevel: value })}
                    className="space-y-2 mt-2"
                  >
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="font-normal cursor-pointer">
                        קל - אי נוחות קלה
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium" className="font-normal cursor-pointer">
                        בינוני - כאב משמעותי
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="severe" id="severe" />
                      <Label htmlFor="severe" className="font-normal cursor-pointer">
                        חמור - כאב קשה המפריע לתפקוד
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="critical" id="critical" />
                      <Label htmlFor="critical" className="font-normal cursor-pointer">
                        קריטי - כאב בלתי נסבל, דורש טיפול מיידי
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id="urgentCare"
                    checked={formData.urgentCare}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, urgentCare: checked as boolean })
                    }
                  />
                  <Label htmlFor="urgentCare" className="font-normal cursor-pointer">
                    ☑️ כן, אני זקוק לטיפול רפואי מיידי
                  </Label>
                </div>

                <div>
                  <Label htmlFor="estimatedCost">עלות טיפול משוערת (בש"ח) *</Label>
                  <Input
                    id="estimatedCost"
                    type="number"
                    placeholder="לדוגמה: 15000"
                    value={formData.estimatedCost}
                    onChange={(e) => setFormData({ ...formData, estimatedCost: e.target.value })}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    ניתן להעריך לפי הצעת מחיר שקיבלת מקליניקה
                  </p>
                </div>

                <div>
                  <Label>האם לקחת הלוואה לצורך הטיפול? *</Label>
                  <RadioGroup
                    value={formData.loanTaken}
                    onValueChange={(value) => setFormData({ ...formData, loanTaken: value })}
                    className="space-y-2 mt-2"
                  >
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="yes" id="loan-yes" />
                      <Label htmlFor="loan-yes" className="font-normal cursor-pointer">
                        כן, לקחתי הלוואה
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="no" id="loan-no" />
                      <Label htmlFor="loan-no" className="font-normal cursor-pointer">
                        לא, לא לקחתי הלוואה
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Documents */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Paperclip className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h2 className="text-2xl font-bold">שלב 3 מתוך 4: העלאת מסמכים</h2>
                <p className="text-muted-foreground mt-2">מסמכים נדרשים לאימות התיק</p>
              </div>

              <Card className="p-4 bg-muted/50 border-2 border-dashed">
                <h3 className="font-bold mb-3">✅ מסמכים נדרשים:</h3>
                <ul className="space-y-2 text-sm">
                  <li>☐ צילום תעודת זהות (שני צדדים)</li>
                  <li>☐ קבלות/חשבוניות מהקליניקה</li>
                  <li>☐ תמונות של הנזק הרפואי (אופציונלי)</li>
                  <li>☐ מסמכי הלוואה (אם רלוונטי)</li>
                </ul>
                <h3 className="font-bold mt-4 mb-3">⭐ מסמכים מומלצים (מעלים עדיפות):</h3>
                <ul className="space-y-2 text-sm">
                  <li>☐ תלונה במשטרה</li>
                  <li>☐ חוות דעת רפואית</li>
                  <li>☐ התכתבות עם Medical Smile</li>
                </ul>
              </Card>

              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                <Paperclip className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                <p className="font-medium mb-2">גרור קבצים לכאן או לחץ לבחירה</p>
                <p className="text-sm text-muted-foreground">PDF, JPG, PNG, DOC - עד 5MB לקובץ</p>
              </div>

              <div>
                <Label>תלונה במשטרה *</Label>
                <RadioGroup
                  value={formData.policeReport}
                  onValueChange={(value) => setFormData({ ...formData, policeReport: value })}
                  className="space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="not-filed" id="not-filed" />
                    <Label htmlFor="not-filed" className="font-normal cursor-pointer">
                      לא הוגשה
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="filed" id="filed" />
                    <Label htmlFor="filed" className="font-normal cursor-pointer">
                      הוגשה - יש לי מספר תלונה
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="in-process" id="in-process" />
                    <Label htmlFor="in-process" className="font-normal cursor-pointer">
                      בתהליך הגשה
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Card className="p-4 bg-blue-50 border-r-4 border-primary">
                <p className="text-sm">
                  <strong>🔒 אבטחת מידע:</strong> כל הקבצים מוצפנים באופן אוטומטי ונשמרים
                  בשרתים מאובטחים. רק צוות מורשה יכול לצפות במסמכים.
                </p>
              </Card>
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <FileCheck className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h2 className="text-2xl font-bold">שלב 4 מתוך 4: סיכום ואישור</h2>
                <p className="text-muted-foreground mt-2">אנא בדוק את הפרטים לפני השליחה</p>
              </div>

              <Card className="p-6 bg-muted/30">
                <h3 className="font-bold text-lg mb-4">📋 פרטים אישיים:</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>שם:</strong> {formData.fullName || "לא הוזן"}
                  </p>
                  <p>
                    <strong>ת"ז:</strong> {formData.idNumber ? "XXX-XX-****" : "לא הוזן"}
                  </p>
                  <p>
                    <strong>טלפון:</strong> {formData.phone || "לא הוזן"}
                  </p>
                  <p>
                    <strong>עיר:</strong> {formData.city || "לא הוזן"}
                  </p>
                </div>

                <h3 className="font-bold text-lg mt-6 mb-4">🏥 פרטי הנזק:</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>רמת כאב:</strong> {formData.painLevel || "לא נבחר"}
                  </p>
                  <p>
                    <strong>עלות משוערת:</strong> {formData.estimatedCost || "0"} ₪
                  </p>
                  <p>
                    <strong>הלוואה:</strong> {formData.loanTaken === "yes" ? "כן" : "לא"}
                  </p>
                  <p>
                    <strong>טיפול דחוף:</strong> {formData.urgentCare ? "כן" : "לא"}
                  </p>
                </div>
              </Card>

              <div className="space-y-3">
                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox
                    id="consent1"
                    checked={formData.consent1}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent1: checked as boolean })
                    }
                  />
                  <Label htmlFor="consent1" className="font-normal cursor-pointer">
                    אני מאשר/ת כי כל המידע שמסרתי נכון ומדויק *
                  </Label>
                </div>
                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox
                    id="consent2"
                    checked={formData.consent2}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent2: checked as boolean })
                    }
                  />
                  <Label htmlFor="consent2" className="font-normal cursor-pointer">
                    אני מאשר/ת את תנאי השימוש ומדיניות הפרטיות *
                  </Label>
                </div>
                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox
                    id="consent3"
                    checked={formData.consent3}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent3: checked as boolean })
                    }
                  />
                  <Label htmlFor="consent3" className="font-normal cursor-pointer">
                    אני מסכים/ה לקבל עדכונים בנוגע לתיק שלי *
                  </Label>
                </div>
              </div>

              <Card className="p-4 bg-yellow-50 border-r-4 border-accent">
                <p className="text-sm">
                  <strong>⚠️ שים לב:</strong> לאחר השליחה, תקבל מספר תיק ייחודי ואישור
                  בדוא"ל ו-SMS. תהליך האימות לוקח 1-2 ימי עסקים.
                </p>
              </Card>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack}>
                ⬅ חזור
              </Button>
            )}
            {step < 4 ? (
              <Button onClick={handleNext} className="mr-auto">
                הבא ➜
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="mr-auto bg-secondary hover:bg-secondary/90">
                שלח תיק ➜
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
