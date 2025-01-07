import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FPSTableProps {
  gameIndex: number;
}

const FPSTable = ({ gameIndex }: FPSTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Ultra</TableHead>
          <TableHead>Haut</TableHead>
          <TableHead>Moyen</TableHead>
          <TableHead>Bas</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default FPSTable;