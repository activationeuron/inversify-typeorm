import { MigrationInterface, QueryRunner } from 'typeorm';

export class createStudentTable1665256344574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE
    student(
        id INT PRIMARY KEY NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        photo_url VARCHAR(255) NOT NULL
    );
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
