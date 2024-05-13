import { Country } from "@/types/country.type";
import { Box, Card, CardContent } from "@mui/material";
import Link from "next/link";

interface CountryProps {
  country: Country;
}

export default function CountryCard({ country }: CountryProps) {
  return (
    <>
      <Box width={"fit-content"} margin={1}>
        <Link
          href={`http://localhost:3000/countries/${country.code}`}
          style={{ textDecoration: "none" }}
        >
          <Card>
            <CardContent>
              <Box marginBottom={1}>
                {country.name}
              </Box>
              <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
                {country.emoji}
              </Box>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </>
  );
}
