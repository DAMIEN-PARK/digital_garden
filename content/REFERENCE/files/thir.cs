using UnityEngine;

public class thir : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5.0f;
    [SerializeField] private float rotationSpeed = 10.0f;
    [SerializeField] private float jumpForce = 5.0f;
    [SerializeField] private float gravity = -9.81f;

    private CharacterController controller;
    private Transform cameraTransform;
    private Vector3 moveDirection;
    private float verticalVelocity;
    private bool isGrounded;

    private void Start()
    {
        controller = GetComponent<CharacterController>();
        cameraTransform = Camera.main.transform;
    }

    private void Update()
    {
        // 지면 체크 (CharacterController의 isGrounded 사용)
        isGrounded = controller.isGrounded;
        
        // 중력 처리
        if (isGrounded && verticalVelocity < 0)
        {
            verticalVelocity = -0.5f;
        }
        else
        {
            verticalVelocity += gravity * Time.deltaTime;
        }

        // 점프 처리
        if (isGrounded && Input.GetButtonDown("Jump"))
        {
            verticalVelocity = Mathf.Sqrt(jumpForce * -2f * gravity);
        }

        // 이동 입력 처리
        float horizontalInput = Input.GetAxisRaw("Horizontal");
        float verticalInput = Input.GetAxisRaw("Vertical");
        Vector3 inputDirection = new Vector3(horizontalInput, 0f, verticalInput).normalized;

        // 입력이 있을 경우 이동 및 회전
        if (inputDirection.magnitude >= 0.1f)
        {
            // 카메라 방향 기준으로 이동 각도 계산
            float targetAngle = Mathf.Atan2(inputDirection.x, inputDirection.z) * Mathf.Rad2Deg + cameraTransform.eulerAngles.y;
            
            // 캐릭터 회전
            transform.rotation = Quaternion.Euler(0f, targetAngle, 0f);
            
            // 전방 방향으로 이동
            moveDirection = Quaternion.Euler(0f, targetAngle, 0f) * Vector3.forward;
        }
        else
        {
            moveDirection = Vector3.zero;
        }

        // 최종 이동 벡터 계산
        Vector3 movementVector = moveDirection * moveSpeed;
        movementVector.y = verticalVelocity;
        
        // 캐릭터 이동
        controller.Move(movementVector * Time.deltaTime);
    }
}
