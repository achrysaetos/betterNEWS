import React, { useContext } from "react"
import { useMutation } from "@apollo/react-hooks"
import { Flex, Text, Button, FormControl, useDisclosure, IconButton, Input } from "@chakra-ui/react"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

import { AuthContext } from "../../context/auth"
import { useForm } from "../../util/hooks"
import { ADD_KEYWORD_MUTATION } from "../../graphql/ADD_KEYWORD_MUTATION"

export default function AddTerm() {
    const { user } = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { values, onChange, onSubmit } = useForm(createCardCallback, { userId: user.id, keyword: "" })

    const [createCard] = useMutation(ADD_KEYWORD_MUTATION, {
      variables: values,
      update() {
        values.keyword = ""
      }
    })
  
    function createCardCallback() { // to call createCard() in useForm()
      createCard()
    }

  return (
    <>
      <IconButton variant="outline" colorScheme="teal" icon={<AddIcon />} size="lg" mr={6} onClick={onOpen}/>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color="teal.500">Add a Search Term to Follow</Text>
            <ModalCloseButton _focus="outline: 0" />
          </ModalHeader>

          <ModalBody>
            { user ? 
              <>
                <Flex w="100%" justifyContent="center">
                  <form onSubmit={onSubmit} noValidate>
                    <FormControl>
                      <Flex alignItems="center">
                        <Input 
                          textAlign="center"
                          w="200px"
                          size="lg" 
                          variant="flushed"
                          focusBorderColor="grey"
                          autoComplete="off"
                          placeholder=""
                          name="keyword"
                          type="text"
                          value={values.keyword}
                          onChange={onChange}
                        />
                      </Flex>
                    </FormControl>
                    
                    <Button 
                      colorScheme="teal" 
                      variant="outline" 
                      width="full" 
                      mt={6} 
                      size="lg" 
                      type="submit" 
                      onClick={onClose} 
                      disabled={
                        values.keyword.trim() === ""
                      }
                    >
                      Add
                    </Button>
                  </form>
                </Flex>
              </> 
            : "" }
          </ModalBody>
          
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}
