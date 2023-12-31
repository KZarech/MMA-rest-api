import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { EventModule } from './event/event.module';
import { FighterModule } from './fighter/fighter.module';
import { FightModule } from './fight/fight.module';
import { RankingModule } from './ranking/ranking.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {WeightClassModule} from "./weight__class/weight__class.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                synchronize: true,
                entities: [__dirname + '/**/*.entity{.js, .ts}'],
            }),
            inject: [ConfigService],
        }),
        WeightClassModule,
        LocationModule,
        EventModule,
        FighterModule,
        FightModule,
        RankingModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
