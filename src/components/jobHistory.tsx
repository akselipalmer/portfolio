import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Selection,
} from "@nextui-org/react";
import JobCard from "./jobCard";
import { useState } from "react";

export default function JobHistory(): JSX.Element {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["1"]));

  return (
    <div>
      <Card>
        <CardHeader>
          <h3 className="text-3xl">Job History</h3>
        </CardHeader>
        <CardBody>
          <Table
            color="primary"
            selectionMode="single"
            selectedKeys={selectedKeys}
            defaultSelectedKeys={["1"]}
            aria-label="Job Experience"
            onSelectionChange={setSelectedKeys}
          >
            <TableHeader>
              <TableColumn>Title</TableColumn>
              <TableColumn>Company</TableColumn>
              <TableColumn className="hidden md:flex">Duration</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Front End Developer</TableCell>
                <TableCell>Histroic Data</TableCell>
                <TableCell className="hidden md:flex">
                  Feb 2023 - (Present)
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Subcontractor</TableCell>
                <TableCell>Ox Construction LLC</TableCell>
                <TableCell className="hidden md:flex">
                  Aug 2020 - May 2021
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Server</TableCell>
                <TableCell>Olive Garden & Sunset Grill</TableCell>
                <TableCell className="hidden md:flex">
                  Apr 2018 - Feb 2023
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <JobCard currentCard={Array.from(selectedKeys)[0]} />
        </CardBody>
      </Card>
    </div>
  );
}
