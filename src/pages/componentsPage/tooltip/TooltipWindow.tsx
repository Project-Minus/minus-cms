import SpeechBubbleBox from "@widgets/speechBubble/speechBubbleBox/SpeechBubbleBox";

export default function TooltipWindow() {
  return (
    <>
      <div className="bubble-box-wrapper">
        <SpeechBubbleBox
          contents="It's tooltip!"
          bubbleContents="It's tooltip in speechBubble!"
          size={"medium"}
          checkOverflow={false}
          boxContentStyle={{
            fontWeight: 500,
          }}
        />
      </div>
      <div className="bubble-box-wrapper">
        <SpeechBubbleBox
          contents="It's tooltip!"
          bubbleContents="It's tooltip in speechBubble!"
          size={"medium"}
          textColor="red"
          backgroundColor="blue"
          checkOverflow={false}
          boxContentStyle={{
            fontWeight: 500,
          }}
        />
      </div>
      <div className="bubble-box-wrapper">
        <SpeechBubbleBox
          contents="It's tooltip!"
          bubbleContents="It's tooltip in speechBubble!"
          size={"medium"}
          textColor="orange"
          backgroundColor="green"
          checkOverflow={false}
          boxContentStyle={{
            fontWeight: 500,
          }}
        />
      </div>
      <div className="bubble-box-wrapper">
        <SpeechBubbleBox
          contents="It's tooltip!"
          bubbleContents="It's tooltip in speechBubble!"
          size={"medium"}
          textColor="purple"
          backgroundColor="yellow"
          checkOverflow={false}
          boxContentStyle={{
            fontWeight: 500,
          }}
        />
      </div>
    </>
  );
}
