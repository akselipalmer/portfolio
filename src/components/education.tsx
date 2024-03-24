import { Card, CardBody, CardHeader, Tab, Tabs } from "@nextui-org/react";

const scrimbaTexts: string[] = [
  "Completed an intensive software engineering boot camp focused on front end web development.",
  "Acquired practical skills in front-end technologies such as HTML, CSS, and JavaScript, along with modern frameworks like React.",
  "Participated in regular code reviews and feedback sessions to enhance coding skills and best practices.",
  "Completed over 70 hours of top-notch tutorials, hundreds of coding challenges, and dozens of real-world projects.",
];

const frontEndMastersTexts: string[] = [
  "I am actively expanding my knowledge of technologies that I’m already familiar with.",
  "As well as always growing my language base.",
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
