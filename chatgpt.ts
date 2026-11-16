
namespace chatgpt {
    let question = ""
    let answer = ""

    /**
     * Skicka en fråga till AI-bryggan.
     */
    //% block="skicka fråga %text till AI"
    //% text.shadow="text"
    export function ask(text: string): void {
        question = text
        serial.writeLine("ASK:" + question)
    }

    /**
     * Hämta det senaste svaret.
     */
    //% block="AI-svar"
    export function getAnswer(): string {
        return answer
    }
}
