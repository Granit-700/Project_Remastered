import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import type { ModalType } from "../../../stores/modalStore";
import close from "../../../assets/icons/close.svg";

interface ProductDeatailsModalProps {
  openModal: ModalType;
  closeModal: () => void;
};

const ProductDeatailsModal = ({ openModal, closeModal }: ProductDeatailsModalProps) => {
  return (
    <Dialog
      open={Boolean(openModal)}
      onClose={() => closeModal()}
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
        "& .MuiPaper-root": {
          mt: "150px",
        },
      }}
      slotProps={{
        paper: {
          sx: {
            padding: "24px 24px 36px",
            borderRadius: "24px",
            maxWidth: "684px",
          }
        }
      }}
      maxWidth={false}
    >
      <DialogTitle
        sx={{
          p: 0,
          mb: "24px",
          fontWeight: 600,
          fontSize: "40px",
          lineHeight: "120%",
          color: "#000",
          position: "relative",
        }}
      >
        {"Title"}
        <IconButton
          onClick={() => closeModal()}
          disableRipple
          edge="end"
          sx={{
            position: "absolute",
            top: 0,
            right: 4,
            p: 0,
            m: 0,
          }}
        >
          <Box component="img" src={close} alt="close" />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          p: 0,
          display: "flex",
          gap: "16px",
          mb: "40px",
        }}
      >
        <Box
          component="img"
          src={"url"}
          alt={"titleImage"}
          minWidth="276px"
          height="220px"
        />
        <Box>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              lineHeight: "130%",
              mb: "10px",
            }}
          >
            {`Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Hic, quam dignissimos officia ut eius optio 
            tenetur qui voluptatum molestias deleniti?`}
          </Typography>
          <Box>
            <Typography
              component="span"
              sx={{
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "130%",
                color: "#000"
              }}
            >
              Состав:
            </Typography>
            {/* временный вариант */}
            <Box
              sx={{
                display: "flex",
                gap: "2px",
                flexDirection: "column",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "12px",
                  lineHeight: "130%",
                  color: "#000",
                }}
              >
                {"NULL"}
              </Typography>
            </Box>
            {/* временный вариант */}
            <Typography
              component="span"
              sx={{
                fontSize: "12px",
                lineHeight: "130%",
                color: "#B1B1B1",
              }}
            >
              {+" г, ккал "}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        disableSpacing
        sx={{
          p: 0,
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "16px",
          }}
        >
          <Button
            disableRipple
            sx={{
              borderRadius: "12px",
              p: "11px 32px",
              backgroundColor: "#FF7020",
              color: "#fff",
              width: "276px",
              height: "40px",
            }}
          >
            Добавить
          </Button>
          <Box
            sx={{
              backgroundColor: "#F2F2F3",
              borderRadius: "12px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: "9px 12px",
            }}
          >
            <IconButton
              disableRipple
              sx={{
                fontSize: "16px",
                color: "#000",
                p: 0,
              }}
            >
              -
            </IconButton>
            <Typography component="span"
              sx={{
                fontSize: "16px",
                color: "#000",
                p: 0,
                ml: "18px",
                mr: "15px",
              }}
            >
              {"0"}
            </Typography>
            <IconButton disableRipple
              sx={{
                fontSize: "16px",
                color: "#000",
                p: 0,
              }}
            >
              +
            </IconButton>
          </Box>
        </Box>
        <Typography
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "130%",
            color: "#000",
          }}
        >
          {+ " сом"}
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDeatailsModal;
