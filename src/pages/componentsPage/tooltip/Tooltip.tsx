import SpeechBubbleBox from "@widgets/speechBubble/speechBubbleBox/SpeechBubbleBox";

export default function Tooltip() {
  return (
    <div style={{ display: "inline-block", marginTop: 100, width: 50 }}>
      <SpeechBubbleBox
        contents={"It's tooltip!"}
        bubbleContents={"It's tooltip!"}
        position="top"
        size="medium"
        checkOverflow={false}
        boxContentStyle={{
          fontSize: 14,
          fontWeight: 500,
          color: "rgba(255, 255, 255, 1)",
        }}
      />
    </div>
  );
}
