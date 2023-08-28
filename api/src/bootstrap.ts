import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Create Swagger document using DocumentBuilder
    const config = new DocumentBuilder()
        .setTitle('MMA')
        .setDescription('MMA REST API endpoints')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    // Setup Swagger UI
    SwaggerModule.setup('docs', app, document);

    console.log(`bootstrap started, port - ${9000}`)
    await app.listen(9000);
}

export default bootstrap;