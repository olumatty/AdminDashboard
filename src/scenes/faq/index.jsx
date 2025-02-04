import {Box,useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../theme";

const FAQ = () => { 
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                How do I reset my password?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                You can reset your password by clicking on the "Forgot Password" link on the login page. 
                Follow the instructions sent to your registered email to create a new password.
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                Can I use this service on multiple devices?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Yes! Our platform is accessible on multiple devices, including smartphones, tablets, and computers.
                Just log in with your account to sync your data across devices.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                What payment methods do you accept?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other digital payment options. 
                You can check the payment page for the full list of accepted methods.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                How can I cancel my subscription?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                You can cancel your subscription anytime from your account settings. 
                Go to the "Subscription" section and select "Cancel Subscription." Your access will continue until the end of your billing period.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                Do you offer refunds or free trials?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                We offer a free trial for new users. Refunds depend on our refund policy—please check our Terms & Conditions or contact customer support for assistance.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ;
