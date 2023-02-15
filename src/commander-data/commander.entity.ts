import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"


@Entity({ name: 'commander_data' })
export class CommanderData {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ unique: true })
    nit: string
    @Column()
    business_name: string
    @Column()
    tradename: string
    @Column()
    city: string
    @Column()
    department: string
    @Column()
    phone_number: string
    @Column()
    address: string
    @Column()
    number_of_devices: number
    @Column()
    server_trackId: string
    @Column({ nullable: true })
    lifetime: string
    @Column({ nullable: true })
    activation_date: string
    @Column({ nullable: true })
    end_date: string
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

}