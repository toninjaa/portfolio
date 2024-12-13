import { motion } from 'motion/react';

interface Props {
  link?: string,
  title?: string,
}

export default function Bubble(props: Props) {
  const { link, title } = props;

  return (
    <motion.div
      className="bubble"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
      <a href={link} target="_blank" />
    </motion.div>
  )
}