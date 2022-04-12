import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Box } from '@mui/material';
import Title from '../../Common/Title';

function BussinessToBussiness() {
  return (
    <Box py="0.25rem">
      <Box className="container">
        <Title title="  Our Clients Say" icon={<ChatBubbleIcon fontSize="inherit" />} />
        Bussiness To Bussiness
      </Box>

    </Box>
  );
}

export default BussinessToBussiness;
