def solve():
    import sys
    sys.setrecursionlimit(10000)
    M, N = map(int, sys.stdin.readline().split())
    grid = [sys.stdin.readline().strip().split() for _ in range(M)]

    # Directions: 0 = up, 1 = right, 2 = down, 3 = left
    dr = [-1, 0, 1, 0]
    dc = [0, 1, 0, -1]

    # Reflection rules
    reflect = {
        '/': {0: 1, 1: 0, 2: 3, 3: 2},
        '\\': {0: 3, 3: 0, 2: 1, 1: 2}
    }

    max_loop = 0

    for r in range(M):
        for c in range(N):
            if grid[r][c] in ('/', '\\'):
                # Try all 4 directions
                for d in range(4):
                    visited = {}
                    path = []
                    cr, cc, cd = r, c, d

                    while True:
                        if not (0 <= cr < M and 0 <= cc < N):
                            break
                        if grid[cr][cc] == '0':
                            break

                        state = (cr, cc, cd)
                        if state in visited:
                            # Loop detected
                            start_idx = visited[state]
                            loop_cells = {cell[:2] for cell in path[start_idx:]}
                            max_loop = max(max_loop, len(loop_cells))
                            break

                        visited[state] = len(path)
                        path.append(state)

                        # Reflect direction
                        cd = reflect[grid[cr][cc]][cd]
                        # Move to next cell
                        cr += dr[cd]
                        cc += dc[cd]

    print(max_loop)


# Example test
# Input:
# 5 5
# / / 0 0 \
# 0 0 0 / 0
# 0 \ 0 0 /
# \ / \ / 0
# 0 0 \ \ \
# Expected output: 10
