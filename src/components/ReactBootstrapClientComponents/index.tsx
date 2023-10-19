"use client";

import {
  Container as RBContainer,
  Col as RBCol,
  Row as RBRow,
} from "react-bootstrap";

// TODO: when there's time, refactor other components using these

export const Container = (props: any) => <RBContainer {...props} />;
export const Col = (props: any) => <RBCol {...props} />;
export const Row = (props: any) => <RBRow {...props} />;
