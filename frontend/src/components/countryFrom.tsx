import { gql, useMutation } from "@apollo/client";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";
import { FormEvent, useState } from "react";

const CREATE_COUNTRY = gql`
  mutation Mutation($data: NewCountryInput!) {
    addCountry(data: $data) {
      name
      emoji
      code
    }
  }
`;

export default function CountryForm() {
  const router = useRouter();
  const [createCountry] = useMutation(CREATE_COUNTRY);
  const [isActivate, setIsActivate] = useState(false);

  const [dataForm, setDataForm] = useState({
    name: "",
    emoji: "",
    code: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: name.startsWith("number")
        ? value === ""
          ? null
          : parseFloat(value)
        : value,
    });
  };

  // Vérifie si les données entrées sont conformes
  const checkForm = () => {
    const { name, emoji, code } = dataForm;
    if (name.trim() !== "" && emoji.trim() !== "" && code.trim() !== "") {
      setIsActivate(true);
    } else {
      setIsActivate(false);
    }
  };

  // Vérification si empty et type
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    checkForm();
  };

  // Création du group et rechargement de page
  const submit = async (event: FormEvent) => {
    event.preventDefault();

    const form: EventTarget = event.target;
    const formData = new FormData(form as HTMLFormElement);
    const formDataJson = Object.fromEntries(formData.entries());

    createCountry({
      variables: {
        data: {
          name: formDataJson.name,
          emoji: formDataJson.emoji,
          code: formDataJson.code,
        },
      },
      onCompleted: () => {
        router.push("/");
      },
    });
  };

  return (
    <div >
      <form className={styles.form} onSubmit={submit}>
        <Box padding={2}>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={dataForm.name}
            onChange={handleFormChange}
          />
        </Box>
        <Box padding={2}>
          <label htmlFor="emoji">Emoji</label>
          <input
            required
            type="text"
            id="emoji"
            name="emoji"
            value={dataForm.emoji}
            onChange={handleFormChange}
          />
        </Box>
        <Box padding={2}>
          <label htmlFor="code">Code</label>
          <input
            required
            type="text"
            id="code"
            name="code"
            value={dataForm.code}
            onChange={handleFormChange}
          />
        </Box>
        <Box padding={2}>
          {isActivate ? <button type="submit">Soumettre</button> : null}
        </Box>
      </form>
    </div>
  );
}
