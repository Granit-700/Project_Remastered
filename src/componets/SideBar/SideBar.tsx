import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SideBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minWidth: "300px",
        padding: "24px 16px",
        borderRadius: "18px",
        mt: "72px",
        boxShadow: "0 0 2px 0.1px #B1B1B1"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: "24px",
          }}
        >
          Корзина
        </Typography>
        <Box
          sx={{
            width: "40px",
            height: "20px",
            backgroundColor: "#F2F2F3",
            borderRadius: "6px",
            padding: "2px 0",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
            }}
          >
            {"0"}
          </Typography>
        </Box>
      </Box>
      {false ? (
        ""
      ) : (
        <>
          <Typography
            component="span"
            sx={{
              display: "inline-block",
              fontSize: "16px",
              lineHeight: "130%",
              mt: "16px"
            }}
          >
            {"Тут пока пусто :("}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default SideBar;
