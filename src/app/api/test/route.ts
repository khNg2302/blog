export async function GET() {
    return Response.json({
        message: 'Hello',
        title: 'Test',
        description: 'Desc of test',
        success: true,
        data: "mm"
    })
}