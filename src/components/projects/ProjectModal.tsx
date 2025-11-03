import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Chip,
  Button,
} from "@mui/material";
import type { Project } from "./WithoutBackend";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectModalProps {
  activeProject: Project | null;
  open: boolean;
  onClose: () => void;
  currentImageIndex: number;
  nextImage: () => void;
  prevImage: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  activeProject,
  open,
  onClose,
  currentImageIndex,
  nextImage,
  prevImage,
}) => {
  if (!activeProject) return null;

  return (
    <Modal 
      open={open} 
      onClose={onClose}
      sx={{
        backdropFilter: "blur(10px)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 900,
          maxHeight: "100vh",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          color: "#FFF5F5",
          boxShadow: "0 25px 50px rgba(139, 75, 110, 0.3)",
          borderRadius: "20px",
          p: 4,
          outline: "none",
          border: "1px solid rgba(247, 198, 209, 0.2)",
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(26, 26, 46, 0.5)",
            borderRadius: "20px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(to bottom, #F39EB8, #8B4B6E)",
            borderRadius: "20px",
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#F7C6D1",
            bgcolor: "rgba(139, 75, 110, 0.3)",
            width: 40,
            height: 40,
            border: "1px solid rgba(247, 198, 209, 0.3)",
            "&:hover": {
              bgcolor: "rgba(139, 75, 110, 0.6)",
              transform: "rotate(90deg)",
              transition: "all 0.3s ease",
            },
            transition: "all 0.3s ease",
          }}
        >
          <IoMdClose size={20} />
        </IconButton>

        {/* Title & Description */}
        <Box sx={{ mb: 3, pr: 4 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              background: "linear-gradient(90deg, #F7C6D1, #F39EB8, #FF69B4)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -8,
                left: 0,
                width: 60,
                height: 3,
                background: "linear-gradient(90deg, #F7C6D1, #F39EB8)",
                borderRadius: 2,
              }
            }}
          >
            {activeProject.title}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#C1E1C1",
              lineHeight: 1.6,
              fontSize: "1.05rem",
            }}
          >
            {activeProject.description}
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            mb: 4,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src={activeProject.images[currentImageIndex]}
            alt={`${activeProject.title} screenshot`}
            style={{
              width: "100%",
              maxHeight: 300,
              objectFit: "contain",
              display: "block",
              background: "#0f0f1b",
            }}
          />

          {activeProject.images.length > 1 && (
            <>
              <IconButton
                onClick={prevImage}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 16,
                  transform: "translateY(-50%)",
                  color: "#F7C6D1",
                  bgcolor: "rgba(26, 26, 46, 0.8)",
                  backdropFilter: "blur(10px)",
                  width: 50,
                  height: 50,
                  border: "1px solid rgba(247, 198, 209, 0.3)",
                  "&:hover": {
                    bgcolor: "rgba(139, 75, 110, 0.7)",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <FaArrowLeft size={18} />
              </IconButton>

              <IconButton
                onClick={nextImage}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 16,
                  transform: "translateY(-50%)",
                  color: "#F7C6D1",
                  bgcolor: "rgba(26, 26, 46, 0.8)",
                  backdropFilter: "blur(10px)",
                  width: 50,
                  height: 50,
                  border: "1px solid rgba(247, 198, 209, 0.3)",
                  "&:hover": {
                    bgcolor: "rgba(139, 75, 110, 0.7)",
                    transform: "translateY(-50%) scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <FaArrowRight size={18} />
              </IconButton>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  bgcolor: "rgba(26, 26, 46, 0.8)",
                  backdropFilter: "blur(10px)",
                  color: "#FFF5F5",
                  px: 2,
                  py: 0.5,
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  border: "1px solid rgba(247, 198, 209, 0.2)",
                }}
              >
                {currentImageIndex + 1} / {activeProject.images.length}
              </Box>
            </>
          )}
        </Box>

        {/* Technologies */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              color: "#F7C6D1",
              fontWeight: 600,
            }}
          >
            Technologies Used
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {activeProject.technologies.map((tech: string, index: number) => (
              <Chip
                key={index}
                label={tech}
                sx={{
                  bgcolor: "rgba(139, 75, 110, 0.3)",
                  color: "#F39EB8",
                  borderRadius: "12px",
                  fontWeight: 500,
                  border: "1px solid rgba(243, 158, 184, 0.3)",
                  "&:hover": {
                    bgcolor: "rgba(139, 75, 110, 0.5)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 5px 15px rgba(139, 75, 110, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {activeProject.githubLink && (
            <Button
              variant="contained"
              href={activeProject.githubLink}
              target="_blank"
              startIcon={<FaGithub />}
              sx={{
                bgcolor: "rgba(139, 75, 110, 0.8)",
                background: "linear-gradient(135deg, #8B4B6E, #6B4A3A)",
                color: "#FFF5F5",
                borderRadius: "12px",
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                border: "1px solid rgba(243, 158, 184, 0.3)",
                "&:hover": {
                  bgcolor: "rgba(155, 91, 126, 0.9)",
                  background: "linear-gradient(135deg, #9B5B7E, #7B5A4A)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(139, 75, 110, 0.4)",
                },
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover::before": {
                  left: "100%",
                },
              }}
            >
              View on GitHub
            </Button>
          )}
          {activeProject.liveLink && (
            <Button
              variant="contained"
              href={activeProject.liveLink}
              target="_blank"
              startIcon={<FaExternalLinkAlt />}
              sx={{
                bgcolor: "rgba(255, 105, 180, 0.8)",
                background: "linear-gradient(135deg, #F39EB8, #FF69B4)",
                color: "#FFF5F5",
                borderRadius: "12px",
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                "&:hover": {
                  bgcolor: "rgba(255, 105, 180, 0.9)",
                  background: "linear-gradient(135deg, #FF69B4, #FF1493)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(255, 105, 180, 0.4)",
                },
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover::before": {
                  left: "100%",
                },
              }}
            >
              View Live Demo
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectModal;