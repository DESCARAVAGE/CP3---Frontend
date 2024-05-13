import CountryCard from "@/components/countryCard";
import { Country } from "@/types/country.type";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/index.module.css";
import CountryForm from "@/components/countryFrom";

const GET_ALL_COUNTRIES = gql`
  query ExampleQuery {
    countries {
      name
      emoji
      code
    }
  }
`;

const Home = () => {
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);

  const { loading, error } = useQuery(GET_ALL_COUNTRIES, {
    onCompleted: (data: any) => {
      setCountries(data?.countries);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Box>
      <Box className={styles.display} padding={4}>
        <CountryForm />
      </Box>
      <Box className={styles.display} margin={1}>
        {countries.map((country: Country, i) => (
          <Box padding={1} key={i}>
            <CountryCard country={country} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
