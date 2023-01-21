// suvam pages------------->
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Input,
  useToast,
  Progress,
  HStack,
  Image,
  Heading,
  SimpleGrid,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function CheckoutPage() {
  const [progress, setprogress] = useState(33.33);
  const [termserror, settermserror] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pincode: "",
    mobile: "",
    alternateMobile: "",
    name: "",
    city: "",
    state: "",
    landmark: "",
    area: "",
    flat: "",
    makeprimary: false,
    terms: false,
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
    settermserror(formData.terms);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.terms == false) {
      toast({
        title: "Alert----.",
        description: "Please Accept Terms And Conditions.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Adress.",
        description: "New Adress Added Succesfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setStep((stp) => stp + 1);
      setprogress((prog) => prog + 33.33);
    }
    // Perform form submission logic here, such as sending data to an API or server
  };
  return (
    <Box display={"flex"} mt="60px">
      <Box
        ml="30px"
        w="70%"
        backgroundColor={"#fafafa"}
        boxShadow="2px 2px 0 #e3e3e3"
      >
        <Box w="100%" my="30px">
          <Progress
            colorScheme="green"
            size="sm"
            w="58%"
            m={"auto"}
            value={progress}
          />
        </Box>
        {step === 1 ? (
          <Box display={"flex"} ml="30px" w="100%">
            <form
              style={{ width: "44%", lineHeight: 3 }}
              onSubmit={handleSubmit}
            >
              <Input
                borderRadius={"0"}
                type="text"
                isRequired="true"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                name="mobile"
                isRequired="true"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder="Alternate Mobile:"
                type="text"
                name="alternateMobile"
                value={formData.alternateMobile}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                name="name"
                placeholder="Name:"
                isRequired="true"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder="Flat, House no., Building, Company, Apartment"
                type="text"
                name="flat"
                isRequired="true"
                value={formData.flat}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder=" Area, Street, Sector, Village(optional)"
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                placeholder="City:"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                placeholder="State:"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              <Input
                borderRadius={"0"}
                type="text"
                isRequired="true"
                name="landmark"
                placeholder="Landmark:"
                value={formData.landmark}
                onChange={handleChange}
              />
              <VStack lineHeight={"1"} align="flex-start">
                <Box>
                  <input
                    borderRadius={"0"}
                    name="makeprimary"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  Make as Primary Address
                </Box>
                <Box>
                  <input
                    borderRadius={"0"}
                    name="terms"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  Terms and Conditions
                </Box>
              </VStack>
              <Button type="submit" w="140px">
                Next
              </Button>
            </form>
            <Box
              pt="20px"
              mx="10px"
              mt="4px"
              backgroundColor={"#fafafa"}
              borderLeft="3px solid #e45301"
              boxShadow="2px 2px 0 #e3e3e3"
              px="30px"
              fontFamily="Open Sans Light"
              h="379px"
              w="48%"
              textAlign={"left"}
            >
              <NavLink
                to="/cart"
                borderRight={"1px solid #666"}
                borderBottom="1px solid #666"
                borderTop={"1px solid #666"}
                px="4px"
                py="3px"
              >
                <ArrowLeftIcon mr="10px" />
                Back to Saved Address
              </NavLink>
              <Box>
                <Text my="10px" color="#666">
                  Why Accurate address is important?
                </Text>
                <p style={{ color: "grey", fontSize: "14px" }}>
                  Make sure you get your products on time. If the address is not
                  entered correctly, your package may be returned undelivered.
                  You will then have to place new order. Save time and avoid
                  frustration by entering the address information in appropriate
                  boxes and double checking for typos and other errors.
                </p>
                <Text my="10px" color="#666">
                  A properly filled delivery information helps us in two ways:
                </Text>
                <Text mt="10px" color={"gray"}>
                  1.It helps us deliver you the product(s) on time without any
                  delay
                </Text>
                <Text color={"gray"}>
                  2.It saves a lot of time & effort spent by our delivery team
                  to identify your address.
                </Text>
              </Box>
              <Box mt="30px" border={"1px solid #666"} w="200px" px="1">
                <Text>For help please contact us on</Text>
                <Text>Call us on : +91 8448449073</Text>
              </Box>
            </Box>
          </Box>
        ) : step == 2 ? (
          <CheckForm1 setprogress={setprogress} setStep={setStep}/>
        ) : (
          <CheckForm2 setprogress={setprogress}setStep={setStep} />
        )}
      </Box>
      <Box
        h="230px"
        pb="20px"
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        w="30%"
      >
             <Box
                bgColor={"#4d4d4d"}
                w="100%"
                h="40px"
                mb={"10px"}
                ml="20px"
                display="flex"
                px="7px"
                justifyContent="space-between"
              >
                <Text
                  color="white"
                  alignItems={"center"}
                  textAlign="left"
                  pt="5px"
                >
                  Payment Summary
                </Text>
                <Image
                  filter={"invert(100%)"}
                  w="20px"
                  src="https://www.industrybuying.com/static/desktop-payment/assets/svg/rupee-circle-icon.svg"
                />
              </Box>

        <VStack>
          <Box
            display={"flex"}
            h="30px"
            justifyContent="space-between"
            w="90%"
            margin="auto"
            py="20px"
          >
            <Text>Subtotal:Rs.</Text>
            <Text>{(1244).toLocaleString()}</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            h="30px"
            w="90%"
            margin="auto"
            py="20px"
          >
            <Text>Shipping Charges</Text>
            <Text color="#3da73a">FREE</Text>
          </Box>
          <Box
            fontWeight={"bold"}
            display={"flex"}
            h="30px"
            justifyContent="space-between"
            w="90%"
            margin="auto"
            py="20px"
            fontSize={"20px"}
          >
            <Text>Total Price</Text>
            <Text color="#e45301">{(1455).toLocaleString()}</Text>
          </Box>
          <HStack
            w="100%"
            px="10px"
            mt="10px"
            borderTop={"0.5px solid RGBA(0, 0, 0, 0.36)"}
          >
            <Image
              w="30px"
              h="30px"
              src="https://www.industrybuying.com/static/desktop-payment/assets/svg/delivery-truck.svg"
              alt="Free Shipping"
            />
            <Text color={"grey"} fontSize="12px">
              Shipping charges applicable as per your pincode (759027)
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
export { CheckoutPage };
const CheckForm1 = ({setStep,setprogress}) => {

 const handle1=()=>{
  setStep(stp=>stp-1)
  setprogress(prog=>prog-33.33)

 }
  const handle2=()=>{
    setStep(stp=>stp+1)
    setprogress(prog=>prog+33.33)
  }
  return (
    <>
      <Text>Product Preview</Text>
      <Button onClick={handle1}>Back</Button>
      <Button onClick={handle2}>Next</Button>
    </>
  );
};
const CheckForm2 = ({setprogress,setStep}) => {
const [card,setcard]=useState("")
const[cvv,setcvv]=useState("")
const [date ,setdate]=useState("")
const [error,seterrr]=useState({err1:true,err2:true,err3:true})
const handle1=()=>{
  setStep(stp=>stp-1)
  setprogress(prog=>prog-33.33)
 }
 const handlecardNo=(e)=>{
  
  if(card.length==16){
    seterrr({...error,err1:false})}
else if(card.length<16){

setcard(e.target.value)

}
 }
 const handlecvv=(e)=>{

  if(card.length==3){
    seterrr({...error,err2:false})}
else if(cvv.length<3){
setcvv(e.target.value)
}

 }
  return (
    <Box h="330px" w="70%" margin={"auto"}>
      <Text textAlign={"center"} fontSize="40px">
        Make Payment
        <Box >
      <Heading w="100%"  fontSize={"10px"}  color="#e45301"  textAlign={'left'} fontWeight="normal">
      Enter Card Details
      </Heading>
      <SimpleGrid  columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
        <InputGroup my="20px" size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              Card No
            </InputLeftAddon>
            <Input
             onChange={handlecardNo}
             value={card}
             placeholder="Enter No"
              type="number"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
            {/* cvv and expary */}
           {/* <Grid my="50px" templateColumns={"repeat(2,1fr)"} gap="2px" > */}
           <Box display={"flex"} justifyContent="space-between" >
          <InputGroup  size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              cvv
            </InputLeftAddon>
            <Input w="50px"
              onChange={handlecvv}
              value={cvv}
              type="number"
              placeholder="cvv"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
          <InputGroup   size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              Expary
            </InputLeftAddon>
            
            <Input w="130px"
              onChange={(e)=>{seterrr({...error,err3:false}); setdate(e.target.value)}}
              value={date}
              type="date"
              isRequired="true"
              focusBorderColor="brand.400"
              rounded="md"
            />
           
          </InputGroup>
        
          </Box>
        </FormControl>
      </SimpleGrid>
    </Box>
    </Text>
<Box w="40%" justifyContent={"space-between"} display="flex">
      <Button backgroundColor={"#e45301"}_hover={{color:"white" ,backgroundColor:"#e45301"}} onClick={handle1}>Back</Button>
      <Button backgroundColor={"#e45301"} _hover={{color:"white" ,backgroundColor:"#e45301"}}>Place Order </Button>
      </Box>
    </Box>
  );
};