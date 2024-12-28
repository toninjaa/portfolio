import { motion } from 'motion/react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface Props {
  link?: string,
  title?: string,
}

export default function Bubble(props: Props) {
  const { link, title } = props;

  return (
    <MenuItem
      sx={{
        whiteSpace: 'wrap', 
        '&:hover': { backgroundColor: 'white' },
      }}
    >
      <a href={link} target='_blank'>
        <motion.div
          className="bubble"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Typography>{title}</Typography>
        </motion.div>
      </a>
    </MenuItem>
  )
}