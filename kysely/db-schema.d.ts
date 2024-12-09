/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface _ParticipantToTeam {
  A: number;
  B: number;
}

export interface Activity {
  activityTypeId: number;
  endDateTime: Timestamp;
  id: Generated<number>;
  isOverall: boolean;
  isScored: boolean;
  name: string;
  startDateTime: Timestamp;
}

export interface ActivityType {
  id: Generated<number>;
  name: string;
}

export interface Category {
  activityId: number;
  id: Generated<number>;
  name: string;
}

export interface Cluster {
  altName: string;
  id: Generated<number>;
  image: string;
  name: string;
  num: number;
}

export interface Participant {
  activityId: number;
  altName: string;
  clusterId: number;
  id: Generated<number>;
  name: string;
}

export interface Tally {
  categoryId: number | null;
  clusterId: number;
  id: Generated<number>;
  participantId: number | null;
  rank: number;
  score: number | null;
  teamId: number | null;
  total: number | null;
}

export interface Team {
  activityId: number;
  clusterId: number;
  id: Generated<number>;
  name: string;
  num: number | null;
}

export interface DB {
  _ParticipantToTeam: _ParticipantToTeam;
  Activity: Activity;
  ActivityType: ActivityType;
  Category: Category;
  Cluster: Cluster;
  Participant: Participant;
  Tally: Tally;
  Team: Team;
}