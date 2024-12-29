import { motion } from 'motion/react';
import Typography from '@mui/material/Typography';

interface Props {
  link?: string,
  title?: string,
}

export default function Bubble(props: Props) {
  const { link, title } = props;

  return (
    <a href={link} target='_blank'>
      <motion.div
        className="bubble"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Typography>{title}</Typography>
      </motion.div>
    </a>
  )
}