# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug causes an infinite loop because the state is updated within the `useEffect` without proper dependency management.

## Bug Description

The `MyComponent` uses `useEffect` to update the `count` state. However, the `useEffect` lacks a dependency array and attempts to update the state (`setCount(count + 1)`) within itself without proper condition, leading to an infinite loop that crashes the application.

## Solution

The solution involves correctly managing dependencies within `useEffect` to prevent unnecessary re-renders.