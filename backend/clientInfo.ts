import { Socket } from "socket.io"

export default class ClientInfo {
  public latency = 0
  public name = "Fun"
  public isHost = false
  public loggedIn = false
  public trackUri = ""

  constructor(public socket: Socket) {}
}
