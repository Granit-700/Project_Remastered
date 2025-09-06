import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SideBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "300px",
        padding: "24px 16px",
        borderRadius: "18px",
        mt: "122px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", }}>
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
            234
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
