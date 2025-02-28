import { colors, Stack } from "@mui/material";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack
      bgcolor={colors.blue[500]}
      color={colors.common.white}
      height={"100vh"}
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={50}
    >
      {/* <div className="h-screen flex items-center justify-center bg-blue-500 text-white text-5xl"> */}
      Tailwind is working! 🎉
      {/* </div> */}
    </Stack>
  );
}

export default App;
