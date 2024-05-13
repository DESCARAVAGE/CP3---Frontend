import { Country } from "@/types/country.type";
import { gql, useLazyQuery } from "@apollo/client";
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
  const { id } = router.query;
  const [country, setCountry] = useState<Country | undefined | void>();
  const [getCountry, { loading, error }] = useLazyQuery(GET_ONE_CONTRY, {
    variables: {
      code: Number,
    },
  });

  useEffect(() => {
    if (id) {
      getCountry();
    }
  }, [id]);

  if (loading || !country) return <p>Loading...</p>;
  if (error) return <p>Error :-(</p>;

  return <>{country.name}</>;
};
