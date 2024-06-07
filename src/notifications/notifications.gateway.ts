import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // Permite todas as origens.
    methods: ['GET', 'POST'],
  },
})
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newMessage')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() message: string): void {

    // Broadcast da nova mensagem para todos os clientes conectados, exceto o remetente
    client.broadcast.emit('newMessage', message);

    // Responder ao remetente com uma mensagem de reconhecimento
    client.emit('acknowledgement', 'Your message was received!');
    client.emit(message)
    console.log(message)
  }
}
