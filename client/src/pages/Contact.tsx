import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("ההודעה נשלחה בהצלחה! נחזור אליך בקרוב");
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <Phone className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">צור קשר</h1>
          <p className="text-xl text-muted-foreground">נשמח לעזור ולענות על כל שאלה</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-3 p-8">
            <h2 className="text-2xl font-bold mb-6">שלח לנו הודעה</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">שם מלא *</Label>
                <Input id="name" placeholder="שם פרטי ומשפחה" required />
              </div>

              <div>
                <Label htmlFor="email">דוא"ל *</Label>
                <Input id="email" type="email" placeholder="example@email.com" required />
              </div>

              <div>
                <Label htmlFor="phone">טלפון</Label>
                <Input id="phone" type="tel" placeholder="05X-XXXXXXX" />
              </div>

              <div>
                <Label htmlFor="subject">נושא *</Label>
                <Select required>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="בחר נושא" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">שאלה כללית</SelectItem>
                    <SelectItem value="technical">בעיה טכנית</SelectItem>
                    <SelectItem value="update">עדכון תיק</SelectItem>
                    <SelectItem value="other">אחר</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">הודעה *</Label>
                <Textarea id="message" placeholder="כתוב את הודעתך כאן..." rows={6} required />
              </div>

              <Button type="submit" size="lg" className="w-full">
                שלח הודעה
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <Card className="lg:col-span-2 p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-6">פרטי התקשרות</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">טלפון</h3>
                  <p className="text-muted-foreground">03-1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">דוא"ל</h3>
                  <p className="text-muted-foreground">support@trustflow.org.il</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">כתובת</h3>
                  <p className="text-muted-foreground">רחוב הבריאות 15, תל אביב</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">שעות פעילות</h3>
                  <p className="text-muted-foreground">א'-ה': 08:00-18:00</p>
                  <p className="text-muted-foreground">ו': 09:00-13:00</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1 text-destructive">חירום</h3>
                    <p className="text-sm text-muted-foreground mb-2">לפניות דחופות התקשר:</p>
                    <p className="text-lg font-bold">03-9999999</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
