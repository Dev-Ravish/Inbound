import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
