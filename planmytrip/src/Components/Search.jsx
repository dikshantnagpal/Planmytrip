import { SearchIcon } from "@chakra-ui/icons";
import { Input, Stack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

function Search() {
  return (
    <>
      <Stack spacing={1}>
        {/* <Input focusBorderColor="graan" placeholder="Search" /> */}
        <InputGroup>
          <InputLeftElement
            mt={5}
            ml={150}
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input rounded={5} p={5} type="text" placeholder="Search" />
        </InputGroup>
      </Stack>
      {/* <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
      /> */}
    </>
  );
}

export default Search;
