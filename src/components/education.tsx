import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";

const scrimbaTexts: string[] = [
  "Frontend development boot camp.",
  "HTML, CSS, JavaScript, React, and (more...).",
  "Code reviews and feedback sessions.",
  "70+ hours of tutorials, coding challenges, and real-world projects.",
];

const frontEndMastersTexts: string[] = [
  "Expanding my knowledge of technologies I use.",
  "Growing my language base.",
  "Keeping up with best practices.",
];

export default function Education(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <h3 className=" text-3xl ">Education</h3>
      </CardHeader>
      <CardBody>
        <Tabs aria-label="Educations">
          <Tab key="scrimba" title="Scrimba">
            <Card>
              <CardBody>
                <div className="flex flex-col flex-wrap gap-2">
                  {scrimbaTexts.map((text) => (
                    <p key={text} className="text-medium  font-semibold ">
                      {text}
                    </p>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="front-end-masters" title="Front End Masters">
            <Card>
              <CardBody>
                <div className="flex flex-col flex-wrap gap-2">
                  {frontEndMastersTexts.map((text) => (
                    <p key={text} className="text-medium  font-semibold ">
                      {text}
                    </p>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
