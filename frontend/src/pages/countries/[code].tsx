import { Country } from "@/types/country.type";
import { gql, useLazyQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GET_ONE_CONTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      name
      emoji
      code
    }
  }
`;

const CountryDetailComponent = () => {
  const router = useRouter();
  const { code } = router.query;
  const [country, setCountry] = useState<Country | undefined | void>();
  const [getCountry, { loading, error }] = useLazyQuery(GET_ONE_CONTRY, {
    variables: {
      code: code,
    },
    onCompleted: (data: any) => {
      setCountry(data.country);
    },
  });

  useEffect(() => {
    if (code) {
      getCountry();
    }
  }, [code]);

  if (loading || !country) return <p>Loading...</p>;
  if (error) return <p>Error :-(</p>;

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignContent={"center"} >
        <Box>{country.emoji}</Box>
        <Box>{country.name}</Box>
      </Box>
    </>
  );
};

export default CountryDetailComponent;
