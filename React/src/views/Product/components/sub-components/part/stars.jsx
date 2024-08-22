import { Star, StarBorder } from '@mui/icons-material';
import { Box } from '@mui/material';

const Stars = ({ value }) => {
  return (
    <Box display="flex" gap={0.5} color="yellow">
      {[...Array(5)].map((_, index) => (
        index < value ? <Star key={index} /> : <StarBorder key={index} />
      ))}
    </Box>
  );
};
export default Stars

